import { Component } from '@angular/core';
import { ArtistsTableComponent } from './ui/artists-table/artists-table.component';
import { Artist } from '../../models/as-is/artist';
import { ArtistService } from '../../services/artist.service';
import { CreateArtistRequest } from '../../models/as-is/artists/create-artist-request';
import { CreateArtistModalComponent } from './ui/create-artist-modal/create-artist-modal.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { UpdateArtistModalComponent } from './ui/update-artist-modal/update-artist-modal.component';
import { DeleteArtistModalComponent } from './ui/delete-artist-modal/delete-artist-modal.component';

@Component({
  selector: 'app-artists-page',
  standalone: true,
  imports: [
    ArtistsTableComponent,
    CreateArtistModalComponent,
    CommonModule,
    AsyncPipe,
    UpdateArtistModalComponent,
    DeleteArtistModalComponent
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

  onDeleteArtist(artist: Artist) {
    this.selectedArtist = artist;
    this.showDeleteModal = true;
  }

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

  onCloseDeleteModal() {
    this.showDeleteModal = false;
  }

  onDelete() {
    this.artistService.delete(this.selectedArtist.id).subscribe(()=> {
        this.artists.filter(a => a.id !== this.selectedArtist.id)
    })
    this.showDeleteModal = false;
  }     
}
