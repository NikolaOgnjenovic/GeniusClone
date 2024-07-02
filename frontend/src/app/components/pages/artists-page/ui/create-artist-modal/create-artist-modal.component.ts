import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {ArtistCreateRequest} from "../../../../../models/artists/artist-create-request";

@Component({
  selector: 'app-create-artist-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-artist-modal.component.html',
  styleUrl: './create-artist-modal.component.css'
})
export class CreateArtistModalComponent {
  createArtistForm: FormGroup;
  @Output() create = new EventEmitter<ArtistCreateRequest>();
  @Output() close = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    this.createArtistForm = this.fb.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      birthday: ["", Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
  });
}

  onCancel() {
    this.close.emit();
  }

  onCreate() {
    if (this.createArtistForm.valid) {
      const request: ArtistCreateRequest = {
        name: this.createArtistForm.value.name,
        surname: this.createArtistForm.value.surname,
        birthday: this.createArtistForm.value.birthday,
        description: this.createArtistForm.value.description,
        image: this.createArtistForm.value.image,
        bands: []
      }
      this.create.emit(request);
    }
  }
}
