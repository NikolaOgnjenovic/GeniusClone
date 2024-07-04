import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import { AlbumCreateRequest } from "../../../../../models/albums/album-create-request";
import { GenreService } from "../../../../../services/genre.service";
import { BandService } from "../../../../../services/band.service";
import { ArtistService } from "../../../../../services/artist.service";
import { Genre } from "../../../../../models/as-is/genre";
import {CommonModule, NgForOf} from "@angular/common";
import {Artist} from "../../../../../models/as-is/artist";
import {Band} from "../../../../../models/as-is/band";

@Component({
  selector: 'app-create-album-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    FormsModule,
    CommonModule
  ],
  templateUrl: './create-album-modal.component.html',
  styleUrl: './create-album-modal.component.css'
})
export class CreateAlbumModalComponent implements OnInit {
  createAlbumForm: FormGroup;
  @Output() create = new EventEmitter<AlbumCreateRequest>();
  @Output() close = new EventEmitter<void>();
  genres: Genre[] = [];
  selectedType: string = "'band'";
  bands: Band[] =  [];
  artists: Artist[] = [];


  constructor(
    private fb: FormBuilder,
    private genreService: GenreService,
    private bandService: BandService,
    private artistService: ArtistService
  ) {
    this.createAlbumForm = this.fb.group({
      title: ['', Validators.required],
      releaseDate: ['', Validators.required],
      coverArt: ['', Validators.required],
      genres: [[]],
      band: [[]],
      artist: [[]]
    });
  }

  ngOnInit() {
    this.loadGenres();
    this.loadArtists();
    this.loadBands();
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
        genres: this.createAlbumForm.value.genres,

      };
      this.create.emit(request);
    }
  }

  private loadGenres() {
    this.genreService.getAll().subscribe(response => {
      this.genres = response.genres;
    });
  }

  private loadBands() {
    this.bandService.getAll().subscribe(response => {
      this.bands = response;
    });
  }

  private loadArtists() {
    this.artistService.getAll().subscribe(response => {
      this.artists = response;
    });
  }
}
