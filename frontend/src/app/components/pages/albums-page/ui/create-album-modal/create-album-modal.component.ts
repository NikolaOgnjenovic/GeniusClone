import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { AlbumCreateRequest } from "../../../../../models/albums/album-create-request";
import { GenreService } from "../../../../../services/genre.service";
import { Genre } from "../../../../../models/as-is/genre";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-create-album-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './create-album-modal.component.html',
  styleUrl: './create-album-modal.component.css'
})
export class CreateAlbumModalComponent implements OnInit {
  createAlbumForm: FormGroup;
  @Output() create = new EventEmitter<AlbumCreateRequest>();
  @Output() close = new EventEmitter<void>();
  genres: Genre[] = [];

  constructor(
    private fb: FormBuilder,
    private genreService: GenreService
  ) {
    this.createAlbumForm = this.fb.group({
      title: ['', Validators.required],
      releaseDate: ['', Validators.required],
      coverArt: ['', Validators.required],
      genres: [[]]
    });
  }

  ngOnInit() {
    this.loadGenres();
  }

  onCancel() {
    this.close.emit();
  }

  onCreate() {
    if (this.createAlbumForm.valid) {
      const request: AlbumCreateRequest = {
        title: this.createAlbumForm.value.title,
        releaseDate: this.createAlbumForm.value.releaseDate,
        coverArt: this.createAlbumForm.value.coverArt,
        genres: this.createAlbumForm.value.genres
      };
      this.create.emit(request);
    }
  }

  private loadGenres() {
    this.genreService.getAll().subscribe(response => {
      this.genres = response.genres;
    });
  }
}
