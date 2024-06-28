import { Component } from '@angular/core';
import { Song } from '../../models/as-is/song';
import { SongsService } from '../../services/songs.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CreateSongRequest } from '../../models/songs/create-song-request';
import { CreateSongModalComponent } from './ui/create-song-modal/create-song-modal.component';
import { SongsTableComponent } from './ui/songs-table/songs-table.component';

@Component({
  selector: 'app-songs-page',
  standalone: true,
  imports: [
    CommonModule,
    SongsTableComponent,
    CreateSongModalComponent,
    AsyncPipe
  ],
  templateUrl: './songs-page.component.html',
  styleUrl: './songs-page.component.css'
})
export class SongsPageComponent {
  songs: Song[] = [];
  SelectedSong!: Song;
  showUpdateModal: boolean = false;
  shoWDeleteModal: boolean = false;
  showCreationModal: boolean = false;

  constructor(private songService: SongsService) {}

  ngOnInit(): void {
    this.songService.getAll().subscribe((response: Song[]) => {
      if (response) {
        this.songs = response;
      }
    })
  }

  onCreateSong(): void {
    this.showCreationModal = true;
  }

  onCloseCreationModal(): void {
    this.showCreationModal = false;
  }

  onCreate(createSong: CreateSongRequest) {
    this.songService.create(createSong).subscribe((response: Song) => {
      if (response) {
        this.songs = [...this.songs, response];
      }
    });
    this.showCreationModal = false;
  }

  onUpdateSong(song: Song) {

  }

  onDeleteSong(song: Song) {

  }
}
