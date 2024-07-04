import { Component, OnInit } from '@angular/core';
import { Album } from "../../../models/as-is/album";
import { AlbumService } from "../../../services/albums.service";
import { AlbumCreateRequest } from "../../../models/albums/album-create-request";
import { AlbumUpdateRequest } from "../../../models/albums/album-update-request";
import { CreateAlbumModalComponent } from "./ui/create-album-modal/create-album-modal.component";
import { UpdateAlbumModalComponent } from "./ui/update-album-modal/update-album-modal.component";
import { DeleteAlbumModalComponent } from "./ui/delete-album-modal/delete-album-modal.component";
import {NgForOf, NgIf} from "@angular/common";
import {AlbumTableComponent} from "./ui/album-table/album-table.component";
import { AlbumAddPerformerRequest } from '../../../models/albums/album-add-performer-request';
import {AuthState} from "../../../state/auth-state";

@Component({
  selector: 'app-albums-page',
  standalone: true,
  imports: [
    CreateAlbumModalComponent,
    UpdateAlbumModalComponent,
    DeleteAlbumModalComponent,
    NgIf,
    AlbumTableComponent,
    NgForOf,
  ],
  templateUrl: './albums-page.component.html',
  styleUrl: './albums-page.component.css'
})
export class AlbumsPageComponent implements OnInit {
  albums: Album[] = [];
  selectedAlbum!: Album;
  showUpdateModal: boolean = false;
  showCreationModal: boolean = false;
  showDeleteModal: boolean = false;

  constructor(private albumService: AlbumService, protected readonly authState: AuthState) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumService.getAll().subscribe((albums: Album[]) => {
      this.albums = albums;
    });
  }

  onUpdateAlbum(album: Album): void {
    this.selectedAlbum = album;
    this.showUpdateModal = true;
  }

  onDeleteAlbum(album: Album): void {
    this.selectedAlbum = album;
    this.showDeleteModal = true;
  }

  onCreateAlbum(): void {
    this.showCreationModal = true;
  }

  onCloseCreationModal(): void {
    this.showCreationModal = false;
  }

  onCreate(event: {albumCreateRequest: AlbumCreateRequest, addArtistRequest: AlbumAddPerformerRequest}): void {
    this.albumService.create(event.albumCreateRequest).subscribe(
      (response: Album) => {
        if (response) {
          this.albums = [...this.albums, response];
          this.albumService.addPerformerToAlbum(response.id, event.addArtistRequest).subscribe(response => {});
        }
      },
      error => {
        console.error('Error creating album:', error);
      }
    );
    this.showCreationModal = false;
  }

  onCloseDeleteModal(): void {
    this.showDeleteModal = false;
  }

  onDelete(): void {
    this.albumService.delete(this.selectedAlbum.id).subscribe(
      () => {
        this.albums = this.albums.filter(a => a.id !== this.selectedAlbum.id);
      }
    );
    this.showDeleteModal = false;
  }

  onCloseUpdateModal(): void {
    this.showUpdateModal = false;
  }

  onUpdate(request: AlbumUpdateRequest): void {
    this.albumService.update(this.selectedAlbum.id, request).subscribe((response: Album) => {
        if (response) {
          const index = this.albums.findIndex(a => a.id === this.selectedAlbum.id);
          this.albums[index] = response;
        }
      }
    );
    this.showUpdateModal = false;
  }
}
