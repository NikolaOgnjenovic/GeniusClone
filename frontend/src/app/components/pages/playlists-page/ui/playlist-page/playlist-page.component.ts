import { Component } from '@angular/core';
import { Playlist } from '../../../../../models/as-is/playlist';
import { Router } from '@angular/router';
import { NgForOf } from '@angular/common';

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
  
  constructor(private router: Router) {}

  ngOnInit() {
    if(history.state && history.state.playlist) {
      this.playlist = history.state.playlist;
    }
    console.log(this.playlist);
  }
}
