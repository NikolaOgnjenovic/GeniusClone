import {Component, Input} from '@angular/core';
import { Song } from '../../../models/as-is/song';
import { SongsService } from '../../../services/songs.service';
import { BandService } from '../../../services/band.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-details',
  standalone: true,
  imports: [],
  templateUrl: './song-details.component.html',
  styleUrl: './song-details.component.css'
})
export class SongDetailsComponent {
  @Input() song: Song | undefined = undefined;

  constructor(private songsService: SongsService, bandService: BandService, private route: ActivatedRoute) {}
}
