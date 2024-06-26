import { Component } from '@angular/core';
import { Song } from '../../models/as-is/song';
import { SongsService } from '../../services/songs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-songs-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './songs-page.component.html',
  styleUrl: './songs-page.component.css'
})
export class SongsPageComponent {
  songs: Song[] = [];
  SelectedSong!: Song;
  ShowUpdateModal: boolean = false;
  ShoWDeleteModal: boolean = false;
  ShowCreateModal: boolean = false;

  constructor(private songService: SongsService) {}

  ngOnInit(): void {
    this.songService.getAll().subscribe((response: Song[]) => {
      if (response) {
        this.songs = response;
      }
    })
  }
}
