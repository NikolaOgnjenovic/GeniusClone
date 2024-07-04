import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Band} from "../../../../../models/as-is/band";
import {Artist} from "../../../../../models/as-is/artist";
import {NgForOf} from "@angular/common";
import {ArtistService} from "../../../../../services/artist.service";

@Component({
  selector: 'app-update-band-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './update-band-modal.component.html',
  styleUrl: './update-band-modal.component.css'
})
export class UpdateBandModalComponent implements OnInit {
  @Input() band!: Band;
  @Output() close = new EventEmitter<void>();
  @Output() update = new EventEmitter<{ name: string, members: Artist[], image: string }>();
  updateBandForm: FormGroup;
  artists: Artist[] = [];

  constructor(private fb: FormBuilder, private readonly artistService: ArtistService) {
    this.updateBandForm = this.fb.group({
      name: [this.band?.name || '', Validators.required],
      image: [this.band?.image || '', Validators.required],
      artists: [this.band?.members || []]
    });
  }

  ngOnInit(): void {
    this.artistService.getAll().subscribe((artists: Artist[]) => {
      this.artists = artists;
    });

    this.updateBandForm.patchValue({
      name: this.band.name,
      image: this.band.image,
      artsits: this.band.members
    })
  }

  onCancel(): void {
    this.close.emit();
  }

  onUpdate(): void {
    if (this.updateBandForm.valid) {
      const name = this.updateBandForm.value.name;
      const selectedArtistIds = this.updateBandForm.value.artists;
      const selectedArtists = this.artists.filter(artist => selectedArtistIds.includes(artist.id));
      const image = this.updateBandForm.value.image;

      this.update.emit({ name: name, members: selectedArtists, image: image });
    }
  }

  bandContainsArtist(id: string): boolean {
    return this.band.members?.find((artist) => artist.id === id) !== undefined;
  }
}
