import { Component } from '@angular/core';
import { ArtistsTableComponent } from './ui/artists-table/artists-table.component';
import { Artist } from '../../models/as-is/artist';
import { ArtistService } from '../../services/artist.service';
import { CreateArtistRequest } from '../../models/as-is/artists/create-artist-request';
import { CreateArtistModalComponent } from './ui/create-artist-modal/create-artist-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artists-page',
  standalone: true,
  imports: [
    ArtistsTableComponent,
    CreateArtistModalComponent,
    CommonModule
  ],
  templateUrl: './artists-page.component.html',
  styleUrl: './artists-page.component.css'
})
export class ArtistsPageComponent {
  artists: Artist[] = [];
  selectedArtist!: Artist;
  showUpdatemodal: boolean = false;
  showCreationModal: boolean = false;
  showDeleteModal: boolean = false;

  constructor(private artistService: ArtistService) {}

  ngOnInit() {
    this.artistService.getAll().subscribe(response => {
      this.artists = response;
    });
  }

  onUpdateArtist(artist: Artist) {}

  onDeleteArtist(artist: Artist) {}

  onCreateArtist() {
    this.showCreationModal = true;
  }

  onCloseCreationModal() {
    this.showCreationModal = false;
  }

  onCreate(request: CreateArtistRequest) {
    this.artistService.create(request).subscribe((response:Artist) => {
      if (response) {
        this.artists = [...this.artists, response]
      }
    });
    this.showCreationModal = false;
  }
}
