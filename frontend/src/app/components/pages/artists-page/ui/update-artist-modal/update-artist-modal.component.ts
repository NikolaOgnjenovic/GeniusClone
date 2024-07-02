import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {Artist} from "../../../../../models/as-is/artist";
import {ArtistUpdateRequest} from "../../../../../models/artists/artist-update-request";

@Component({
  selector: 'app-update-artist-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './update-artist-modal.component.html',
  styleUrl: './update-artist-modal.component.css'
})
export class UpdateArtistModalComponent {

  @Input() artist!: Artist;
  @Output() close = new EventEmitter<void>();
  @Output() update = new EventEmitter<ArtistUpdateRequest>();

  updateArtistForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.updateArtistForm = this.fb.group({
      name: [this.artist?.name || "", Validators.required],
      surname: [this.artist?.birthday || "", Validators.required],
      birthday: [this.artist?.birthday || "", Validators.required],
      description: [this.artist?.description || "", Validators.required],
      image: [this.artist?.image || "", Validators.required]
    })
  }

  ngOnChanges() {
    if(this.artist) {
      this.updateArtistForm.patchValue({
        name: this.artist.name,
        surname: this.artist.surname,
        birthday: this.artist.birthday,
        description: this.artist.description,
        image: this.artist.image
      });
    }
  }

  onCancel() {
    this.close.emit();
  }

  onUpdate() {
    if (this.updateArtistForm.valid) {
      const request: ArtistUpdateRequest = {
        name: this.updateArtistForm.value.name,
        surname: this.updateArtistForm.value.surname,
        birthday: this.updateArtistForm.value.birthday,
        description: this.updateArtistForm.value.description,
        image: this.updateArtistForm.value.image,
        bands: []
      }
      this.update.emit(request);
    }
  }
}
