import { Component } from '@angular/core';
import { PlaylistService } from '../../../../../services/playlist.service';
import { SongsService } from '../../../../../services/songs.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Song } from '../../../../../models/as-is/song';
import { Playlist } from '../../../../../models/as-is/playlist';
import { User } from '../../../../../models/as-is/user';
import { PlaylistUpdateRequest } from '../../../../../models/playlists/playlist-update-request';
import { Router } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-update-playlist-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './update-playlist-page.component.html',
  styleUrl: './update-playlist-page.component.css'
})
export class UpdatePlaylistPageComponent {
  updatePlaylistForm: FormGroup;
  songs: Song[] = [];
  selectedSongs: Song[] = [];
  user!: User;
  playlist!: Playlist;

  constructor(private playlistService: PlaylistService, private SongService: SongsService, private fb: FormBuilder, private router: Router) {
    this.updatePlaylistForm = this.fb.group({
    name: [this.playlist?.name, Validators.required]
    });
  }

  ngOnInit() {
    if (history.state && history.state.user && history.state.playlist) {
      this.user = history.state.user;
      this.playlist = history.state.playlist;
    }
    this.SongService.getAll().subscribe((response) => {
      this.songs = response;
      for(var song of this.playlist.songs) {
        for(var realSong of this.songs) {
          if (song.id === realSong.id) {
            this.addSong(realSong);
          }
        }
      }
    })
    this.updatePlaylistForm.patchValue({
      name: this.playlist.name
    });
  }

  ngOnChanges() {
    console.log(this.playlist.name);
    this.updatePlaylistForm.patchValue({
      name: this.playlist.name
    });
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

  onUpdate() {
    if (!this.updatePlaylistForm.valid) 
      return;
    const request: PlaylistUpdateRequest = {
      name: this.updatePlaylistForm.value.name,
      user: this.user,
      songs: this.selectedSongs
    }
    this.playlistService.update(this.playlist.id, request).subscribe(response => {
      if (response) {
        this.router.navigate(['/playlists']);
      }
    });
  }
}
