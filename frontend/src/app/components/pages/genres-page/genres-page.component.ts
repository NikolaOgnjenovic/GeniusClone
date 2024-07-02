import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { GenresTableComponent } from './ui/genres-table/genres-table.component';
import { DeleteGenreModalComponent } from './ui/delete-genre-modal/delete-genre-modal.component';
import { UpdateGenreModalComponent } from './ui/update-genre-modal/update-genre-modal.component';
import { CreateGenreModalComponent } from './ui/create-genre-modal/create-genre-modal.component';
import {GenreService} from "../../../services/genre.service";
import {GetGenresReponse} from "../../../models/genres/get-genres-response";
import {Genre} from "../../../models/as-is/genre";
import {CreateGenreRequest} from "../../../models/genres/create-genre-request";

@Component({
  selector: 'app-genres-page',
  standalone: true,
  imports: [
    AsyncPipe,
    GenresTableComponent,
    UpdateGenreModalComponent,
    DeleteGenreModalComponent,
    CreateGenreModalComponent,
    NgIf
  ],
  templateUrl: './genres-page.component.html',
  styleUrl: './genres-page.component.css'
})
export class GenresPageComponent {
  genres: Genre[] = [];
  showCreationModal = false;
  showUpdateModal = false;
  showDeleteModal = false;
  selectedGenre!: Genre;

  constructor(private readonly genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.getAll().subscribe((response: GetGenresReponse) => {
      if (response) {
        this.genres = response.genres;
      }
    })
  }

  onCreateGenre(): void {
    this.showCreationModal = true;
  }

  onCloseCreationModal(): void {
    this.showCreationModal = false;
  }

  onCreate(name: string): void {
    const request: CreateGenreRequest = { name: name };
    this.genreService.create(request).subscribe((response: Genre) => {
      if (response) {
        this.genres = [...this.genres, response];
      }
    });

    this.showCreationModal = false;
  }

  onUpdateGenre(genre: Genre): void {
    this.selectedGenre = genre;
    this.showUpdateModal = true;
  }

  onCloseUpdateModal(): void {
    this.showUpdateModal = false;
  }

  onUpdate(name: string): void {
    const request = { name };
    this.genreService.update(this.selectedGenre.id, request).subscribe((response: Genre) => {
      if (response) {
        const index = this.genres.findIndex(b => b.id === this.selectedGenre.id);
        this.genres[index] = response;
      }
    });

    this.showUpdateModal = false;
  }

  onDeleteGenre(genre: Genre): void {
    this.selectedGenre = genre;
    this.showDeleteModal = true;
  }

  onCloseDeleteModal(): void {
    this.showDeleteModal = false;
  }

  onDelete(): void {
    this.genreService.delete(this.selectedGenre.id).subscribe(() => {
      this.genres = this.genres.filter(b => b.id !== this.selectedGenre.id);
    });

    this.showDeleteModal = false;
  }
}
