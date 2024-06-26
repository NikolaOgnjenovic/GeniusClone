import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SongDTO } from '../../models/Song/song';

@Component({
  selector: 'app-song-page',
  standalone: true,
  imports: [],
  templateUrl: './song-page.component.html',
  styleUrl: './song-page.component.css'
})
export class SongPageComponent {
  url: string = "http://localhost:8080/api/v1/songs";
  constructor(private readonly http: HttpClient) {}
  public testClick() {
    const songData: ArrayBuffer | null = new TextEncoder().encode('Sample song data').buffer;
    const isPendingReview: boolean = true;
    const title: string = 'Sample Song';

    const request: SongDTO = { songData, isPendingReview, title };
    this.http.post(this.url, request);
  }
}
