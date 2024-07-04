import { Component } from '@angular/core';
import { ArtistsTableComponent } from './ui/artists-table/artists-table.component';
import { CreateArtistModalComponent } from './ui/create-artist-modal/create-artist-modal.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { UpdateArtistModalComponent } from './ui/update-artist-modal/update-artist-modal.component';
import { DeleteArtistModalComponent } from './ui/delete-artist-modal/delete-artist-modal.component';
import {Artist} from "../../../models/as-is/artist";
import {ArtistService} from "../../../services/artist.service";
import {ArtistCreateRequest} from "../../../models/artists/artist-create-request";
import {ArtistUpdateRequest} from "../../../models/artists/artist-update-request";
import {AuthState} from "../../../state/auth-state";

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
  showUpdateModal: boolean = false;
  showCreationModal: boolean = false;
  showDeleteModal: boolean = false;

  constructor(private artistService: ArtistService, protected readonly authState: AuthState) {}

  ngOnInit() {
    this.artistService.getAll().subscribe((response: Artist[]) => {
      this.artists = response;
    });
  }

  onUpdateArtist(artist: Artist) {
    this.selectedArtist = artist;
    this.showUpdateModal = true;
  }

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

  onCreate(request: ArtistCreateRequest) {
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
        this.artists = this.artists.filter(a => a.id !== this.selectedArtist.id)
    })
    this.showDeleteModal = false;
  }

  onCloseUpdateModal() {
    this.showUpdateModal = false;
  }

  onUpdate(request: ArtistUpdateRequest) {
    this.artistService.update(this.selectedArtist.id, request).subscribe((response:Artist) => {
      if (response) {
        const index = this.artists.findIndex(a => a.id === this.selectedArtist.id);
        this.artists[index] = response;
      }
    });
    this.showUpdateModal = false;
  }
}
