import { Component } from '@angular/core';
import { Song } from '../../../../models/as-is/song';
import { SongsService } from '../../../../services/songs.service';
import { BandService } from '../../../../services/band.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-song-page',
  standalone: true,
  imports: [],
  templateUrl: './song-page.component.html',
  styleUrl: './song-page.component.css'
})
export class SongPageComponent {

  song!: Song;
  
  constructor(private songsService: SongsService, bandService: BandService, private route: ActivatedRoute) {}

  ngOnInit() {
    if (history.state && history.state.song) {
      this.song = history.state.song;
    } 
  }
}
