import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {SongUpdateRequest} from "../../../../../models/songs/song-update-request";
import {Song} from "../../../../../models/as-is/song";
import {NgForOf} from "@angular/common";
import {Album} from "../../../../../models/as-is/album";
import {AlbumService} from "../../../../../services/albums.service";

@Component({
  selector: 'app-update-song-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './update-song-modal.component.html',
  styleUrl: './update-song-modal.component.css'
})
export class UpdateSongModalComponent implements OnInit {
  @Input() song!: Song;
  @Output() close = new EventEmitter<void>();
  @Output() update = new EventEmitter<SongUpdateRequest>();

  updateSongForm: FormGroup;
  albums: Album[] = [];

  constructor(private fb: FormBuilder, private albumService: AlbumService) {
    this.updateSongForm = this.fb.group({
      title: ['', Validators.required],
      albumId: ['', Validators.required],
      link: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.albumService.getAll().subscribe((albums: Album[]) => {
      this.albums = albums;
    });

    console.log(this.song);
    if (this.song) {
      this.updateSongForm.patchValue({
        title: this.song.title,
        albumId: this.song.album.id,
        link: this.song.link
      });
    }
  }

  onCancel(): void {
    this.close.emit();
  }

  onUpdate(): void {
    if (this.updateSongForm.valid) {
      const request: SongUpdateRequest = {
        title: this.updateSongForm.value.title,
        albumId: this.updateSongForm.value.albumId,
        link: this.updateSongForm.value.link,
        image: this.updateSongForm.value.image
      };
      this.update.emit(request);
    }
  }
}
