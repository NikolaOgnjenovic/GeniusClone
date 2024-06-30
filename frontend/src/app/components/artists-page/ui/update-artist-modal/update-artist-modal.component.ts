import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Artist } from '../../../../models/as-is/artist';
import { UpdateArtistRequst } from '../../../../models/artists/update-artist-request';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArtistService } from '../../../../services/artist.service';

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
  @Output() update = new EventEmitter<UpdateArtistRequst>();

  updateArtistForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.updateArtistForm = this.fb.group({
      name: [this.artist?.name || "", Validators.required],
      surname: [this.artist?.birthday || "", Validators.required],
      birthday: [this.artist?.birthday || "", Validators.required]
    })
  }

  ngOnChanges() {
    if(this.artist) {
      this.updateArtistForm.patchValue({
        name: this.artist.name,
        surname: this.artist.surname,
        birthday: this.artist.birthday
      });
    }
  }

  onCancel() {
    this.close.emit();
  }

  onUpdate() {
    const request: UpdateArtistRequst = {
      name: this.updateArtistForm.value.name,
      surname: this.updateArtistForm.value.surname,
      birthday: this.updateArtistForm.value.birthday
    }
    this.update.emit(request);
  }
}
