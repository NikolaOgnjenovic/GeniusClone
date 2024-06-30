import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CreateArtistRequest } from '../../../../models/artists/create-artist-request';

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
  @Output() create = new EventEmitter<CreateArtistRequest>();
  @Output() close = new EventEmitter<void>(); 

  constructor(private fb: FormBuilder) {
    this.createArtistForm = this.fb.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      birthday: ["", Validators.required]
  });
}

  onCancel() {
    this.close.emit();
  }

  onCreate() {
    const request: CreateArtistRequest = {
      name: this.createArtistForm.value.name,
      surname: this.createArtistForm.value.surname,
      birthday: this.createArtistForm.value.birthday
    }
    this.create.emit(request);
  }
}
