import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SongsService } from '../../../../../services/songs.service';
import { Song } from '../../../../../models/as-is/song';
import { NgForOf } from '@angular/common';
import { Router } from '@angular/router';
import { PlaylistCreateRequest } from '../../../../../models/playlists/palylist-create-request';
import { User } from '../../../../../models/as-is/user';
import { PlaylistService } from '../../../../../services/playlist.service';
import { PlaylistSongsUpdateRequest } from '../../../../../models/playlists/playlist-songs-request';

@Component({
  selector: 'app-create-playlist-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './create-playlist-page.component.html',
  styleUrl: './create-playlist-page.component.css'
})
export class CreatePlaylistPageComponent {

  createPlaylistForm: FormGroup;
  songs: Song[] = [];
  selectedSongs: Song[] = [];
  user!: User;

  constructor(private playlistService: PlaylistService, private SongService: SongsService, private fb: FormBuilder, private router: Router) {
    this.createPlaylistForm = this.fb.group({
    name: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (history.state && history.state.user) {
      this.user = history.state.user;
    }
    this.SongService.getAll().subscribe((response) => {
      this.songs = response;
    })
  }

  addSong(song: Song) {
    this.selectedSongs.push(song);
    const index = this.songs.findIndex(s => s.id === song.id);
    this.songs.splice(index, 1);
  }

  removeSong(song: Song) {
    this.songs.push(song);
    const index = this.selectedSongs.findIndex(s => s.id === song.id);
    this.selectedSongs.splice(index, 1);
  }

  onCancel() {
    this.router.navigate(['/playlists']);
  }

  onCreate() {
    if (!this.createPlaylistForm.valid) 
      return;
    const request: PlaylistCreateRequest = {
      name: this.createPlaylistForm.value.name,
      user: this.user,
      songs: this.selectedSongs
    }
    this.playlistService.create(request).subscribe(response => {
      if (response) {
        this.router.navigate(['/playlists']);
      }
    });
  }
}
