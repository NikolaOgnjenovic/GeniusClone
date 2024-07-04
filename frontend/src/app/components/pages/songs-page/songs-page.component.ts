import {Component, OnInit} from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CreateSongModalComponent } from './ui/create-song-modal/create-song-modal.component';
import { SongsTableComponent } from './ui/songs-table/songs-table.component';
import { DeleteSongModalComponent } from './ui/delete-song-modal/delete-song-modal.component';
import { UpdateSongModalComponent } from './ui/update-song-modal/update-song-modal.component';
import {SongsService} from "../../../services/songs.service";
import {Song} from "../../../models/as-is/song";
import {SongCreateRequest} from "../../../models/songs/song-create-request";
import {SongUpdateRequest} from "../../../models/songs/song-update-request";
import {AuthState} from "../../../state/auth-state";

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
export class SongsPageComponent implements OnInit {
  songs: Song[] = [];
  selectedSong!: Song;
  showUpdateModal: boolean = false;
  showDeleteModal: boolean = false;
  showCreationModal: boolean = false;

  constructor(private songService: SongsService, protected readonly authState: AuthState) {}

  ngOnInit(): void {
    this.songService.getAll().subscribe((response: Song[]) => {
      if (response) {
        this.songs = response;
        var song: Song;
        var newSongs: Song[] = [];
        for(var song of this.songs) {
          var newSong: Song;
          if (typeof song.album === 'string') {
            for(var addedSong of this.songs) {
              if (addedSong.album.id === song.album) {
                newSong = song;
                newSong.album = addedSong.album;
                newSongs.push(newSong);
              }
            }
          } else {
            newSongs.push(song);
          }
        }
        this.songs = newSongs;
      }
    })
  }

  onCreateSong(): void {
    this.showCreationModal = true;
  }

  onCloseCreationModal(): void {
    this.showCreationModal = false;
  }

  onCreate(createSong: SongCreateRequest) {
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

  onUpdate(updateSongRequest: SongUpdateRequest) {
    this.songService.update(this.selectedSong.id,updateSongRequest).subscribe((response: Song) => {
      if (response) {
        const index = this.songs.findIndex(s => s.id ===response.id);
        this.songs[index] = response;
      }
    });
    this.showUpdateModal = false;
  }
}
