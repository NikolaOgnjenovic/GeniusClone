import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CreateSongModalComponent } from './ui/create-song-modal/create-song-modal.component';
import { SongsTableComponent } from './ui/songs-table/songs-table.component';
import { DeleteSongModalComponent } from './ui/delete-song-modal/delete-song-modal.component';
import { UpdateSongModalComponent } from './ui/update-song-modal/update-song-modal.component';
import { Router } from '@angular/router';
import {SongsService} from "../../../services/songs.service";
import {Song} from "../../../models/as-is/song";
import {CreateSongRequest} from "../../../models/songs/create-song-request";
import {UpdateSongRequest} from "../../../models/songs/update-song-request";

@Component({
  selector: 'app-songs-page',
  standalone: true,
  imports: [
    CommonModule,
    SongsTableComponent,
    CreateSongModalComponent,
    DeleteSongModalComponent,
    UpdateSongModalComponent,
    AsyncPipe
  ],
  templateUrl: './songs-page.component.html',
  styleUrl: './songs-page.component.css'
})
export class SongsPageComponent {
  songs: Song[] = [];
  selectedSong!: Song;
  showUpdateModal: boolean = false;
  showDeleteModal: boolean = false;
  showCreationModal: boolean = false;

  constructor(private songService: SongsService, private router: Router) {}

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

  onDeleteSong(song: Song) {
    this.showDeleteModal = true
    this.selectedSong = song;
  }

  onCloseDeleteModal() {
    this.showDeleteModal = false;
  }

  onDelete() {
    this.songService.delete(this.selectedSong.id).subscribe(() => {
      this.songs = this.songs.filter(s => s.id !== this.selectedSong.id);
    });
    this.showDeleteModal = false;
  }

  onUpdateSong(song: Song) {
    this.selectedSong = song;
    this.showUpdateModal = true;
  }

  onCloseUpdateModal() {
    this.showUpdateModal = false;
  }

  onUpdate(updateSongRequest: UpdateSongRequest) {
    this.songService.update(this.selectedSong.id,updateSongRequest).subscribe((response: Song) => {
      if (response) {
        const index = this.songs.findIndex(s => s.id ===response.id);
        this.songs[index] = response;
      }
    });
    this.showUpdateModal = false;
  }

  onNavigateSong(song: Song) {
    this.router.navigate(['/song'], { state: { song: song } });
  }
}
