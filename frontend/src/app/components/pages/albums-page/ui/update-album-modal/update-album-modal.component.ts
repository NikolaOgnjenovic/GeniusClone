import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import { Album } from "../../../../../models/as-is/album";
import { AlbumUpdateRequest } from "../../../../../models/albums/album-update-request";
import { GenreService } from "../../../../../services/genre.service";
import { Genre } from "../../../../../models/as-is/genre";
import {NgForOf, NgIf, CommonModule} from "@angular/common";

@Component({
  selector: 'app-update-album-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgIf,
    FormsModule,
    CommonModule
  ],
  templateUrl: './update-album-modal.component.html',
  styleUrl: './update-album-modal.component.css'
})
export class UpdateAlbumModalComponent implements OnInit {
  @Input() album!: Album;
  @Output() update = new EventEmitter<AlbumUpdateRequest>();
  @Output() close = new EventEmitter<void>();

  updateAlbumForm: FormGroup;
  genres: Genre[] = [];

  constructor(
    private fb: FormBuilder,
    private genreService: GenreService
  ) {
    this.updateAlbumForm = this.fb.group({
      title: ['', Validators.required],
      releaseDate: ['', Validators.required],
      coverArt: ['', Validators.required],
      genres: [[]]
    });
  }

  ngOnInit() {
    this.loadGenres();
  }

  ngOnChanges() {
    if (this.album) {
      this.updateAlbumForm.patchValue({
        title: this.album.title,
        releaseDate: this.album.releaseDate,
        coverArt: this.album.coverArt,
        genres: this.album.genres.map(genre => genre.id)
      });
    }
  }

  onCancel() {
    this.close.emit();
  }

  onUpdate() {
    if (this.updateAlbumForm.valid) {
      const request: AlbumUpdateRequest = {
        title: this.updateAlbumForm.value.title,
        releaseDate: this.updateAlbumForm.value.releaseDate,
        coverArt: this.updateAlbumForm.value.coverArt,
        genres: this.updateAlbumForm.value.genres
      };
      this.update.emit(request);
    }
  }

  private loadGenres() {
    this.genreService.getAll().subscribe(response => {
      this.genres = response.genres;
    });
  }
}
