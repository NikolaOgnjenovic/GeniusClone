import { Component } from '@angular/core';
import { PlaylistTableComponent } from './ui/playlist-table/playlist-table.component';
import { Playlist } from '../../../models/as-is/playlist';
import { PlaylistService } from '../../../services/playlist.service';
import { User } from '../../../models/as-is/user';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CreatePlaylistPageComponent } from './ui/create-playlist-page/create-playlist-page.component';
import { PlaylistCreateRequest } from '../../../models/playlists/palylist-create-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlists-page',
  standalone: true,
  imports: [
    PlaylistTableComponent,
    AsyncPipe,
    CreatePlaylistPageComponent,
    CommonModule
  ],
  templateUrl: './playlists-page.component.html',
  styleUrl: './playlists-page.component.css'
})
export class PlaylistsPageComponent {
  playlists: Playlist[] = [];
  selectedPlaylist!: Playlist;
  user!: User;

  constructor(private playlistService: PlaylistService, private router: Router) {}

  ngOnInit() {
    this.getUser();
    this.playlistService.getByUserId(this.user.id).subscribe(response => {
      if (response) {
        this.playlists = response;
      }
    });
  }

  getUser() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.user = JSON.parse(user);
    }
  }

  onUpdatePlaylist(playlist: Playlist) {
    this.selectedPlaylist = playlist;
  }

  onDeletePlaylist(playlist: Playlist) {
    this.selectedPlaylist = playlist;
  }

  onCloseCreationModal() {
  }

  onCreate(request: PlaylistCreateRequest) {}

  onCreatePlaylist() {
    this.router.navigate(['/playlists/create'], { state: { user: this.user } });
  }
}
