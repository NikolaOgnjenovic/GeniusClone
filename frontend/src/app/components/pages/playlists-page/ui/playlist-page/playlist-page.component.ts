import { Component } from '@angular/core';
import { Playlist } from '../../../../../models/as-is/playlist';
import { Router } from '@angular/router';
import { NgForOf } from '@angular/common';
import { SongsService } from '../../../../../services/songs.service';
import { Song } from '../../../../../models/as-is/song';

@Component({
  selector: 'app-playlist-page',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './playlist-page.component.html',
  styleUrl: './playlist-page.component.css'
})
export class PlaylistPageComponent {

  playlist!: Playlist;

  constructor(private router: Router, private songsService: SongsService) {}

  ngOnInit() {
    if(history.state && history.state.playlist) {
      this.playlist = history.state.playlist;
    }
    var songs: Song[] = [];
    for(var song of this.playlist.songs) {
      console.log(song.id);
      this.songsService.get(song.id).subscribe(data => {
        console.log(data);
        songs.push(data);
      })

    }
    this.playlist.songs = songs;
    console.log(this.playlist.songs);
  }
}
