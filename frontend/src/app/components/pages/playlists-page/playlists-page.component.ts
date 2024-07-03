import { Component } from '@angular/core';
import { PlaylistTableComponent } from './ui/playlist-table/playlist-table.component';
import { Playlist } from '../../../models/as-is/playlist';
import { PlaylistService } from '../../../services/playlist.service';
import { User } from '../../../models/as-is/user';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CreatePlaylistPageComponent } from './ui/create-playlist-page/create-playlist-page.component';
import { PlaylistCreateRequest } from '../../../models/playlists/palylist-create-request';
import { Router } from '@angular/router';
import { DeletePlaylistPageComponent } from './ui/delete-playlist-page/delete-playlist-page.component';

@Component({
  selector: 'app-playlists-page',
  standalone: true,
  imports: [
    PlaylistTableComponent,
    AsyncPipe,
    CreatePlaylistPageComponent,
    CommonModule,
    DeletePlaylistPageComponent
  ],
  templateUrl: './playlists-page.component.html',
  styleUrl: './playlists-page.component.css'
})
export class PlaylistsPageComponent {
  playlists: Playlist[] = [];
  user!: User;
  showDeleteModal: boolean = false;
  selectedPlaylist!: Playlist;

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
    this.router.navigate(['/playlists/update'], {state: {playlist: playlist, user: this.user}});
  }

  onDeletePlaylist(playlist: Playlist) {
    this.selectedPlaylist = playlist;
    this.showDeleteModal = true;
  }

  onCloseDeleteModal() {
    this.showDeleteModal = false;
  }

  onDelete() {
    this.playlistService.delete(this.selectedPlaylist.id).subscribe(()=> {
      this.playlists = this.playlists.filter(p => p.id !== this.selectedPlaylist.id)
  })
  this.showDeleteModal = false;
  }

  onCreatePlaylist() {
    this.router.navigate(['/playlists/create'], { state: { user: this.user } });
  }

  onVisitPlaylist(playlist: Playlist) { 
    this.router.navigate(['/playlists', playlist.id], {state: {playlist: playlist}});
  }
}
