import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {SongCreateRequest} from "../../../../../models/songs/song-create-request";
import {NgForOf} from "@angular/common";
import {Album} from "../../../../../models/as-is/album";
import {AlbumService} from "../../../../../services/albums.service";
import { Song } from '../../../../../models/as-is/song';

@Component({
  selector: 'app-create-song-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './create-song-modal.component.html',
  styleUrl: './create-song-modal.component.css'
})
export class CreateSongModalComponent implements  OnInit {
  @Output() close = new EventEmitter<void>();
  @Output() create = new EventEmitter<SongCreateRequest>();
  createSongForm: FormGroup;
  albums: Album[] = [];

  constructor(private fb: FormBuilder, private albumService: AlbumService) {
    this.createSongForm = this.fb.group({
      title: ['', Validators.required],
      albumId: ['', Validators.required],
      link: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.albumService.getAll().subscribe((albums: Album[]) => {
        this.albums = albums;
      }
    );
  }

  addSong(song: Song) {
    
  }

  removeSong(song: Song) {
    
  }

  onCancel(): void {
    this.close.emit();
  }

  onCreate(): void {
    const request: SongCreateRequest = {
      link: this.createSongForm.value.link,
      title: this.createSongForm.value.title,
      albumId: this.createSongForm.value.albumId
    };
    this.create.emit(request);
  }
}
