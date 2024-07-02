import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {SongsService} from "../../../../../services/songs.service";
import {UpdateSongRequest} from "../../../../../models/songs/update-song-request";
import {Song} from "../../../../../models/as-is/song";

@Component({
  selector: 'app-update-song-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './update-song-modal.component.html',
  styleUrl: './update-song-modal.component.css'
})
export class UpdateSongModalComponent {
  @Input() song!: Song;
  @Output() close = new EventEmitter<void>();
  @Output() update = new EventEmitter<UpdateSongRequest>();

  updateSongForm: FormGroup;

  constructor(private fb: FormBuilder, private songService: SongsService) {
    this.updateSongForm  = this.fb.group({
      title: [this.song?.title || "", Validators.required]
    });
  }

  ngOnChanges() {
    if (this.song) {
      this.updateSongForm.patchValue({
        title: this.song.title
      })
    }
  }

  onCancel() {
    this.close.emit();
  }

  onUpdate() {
    if (typeof this.song.songData === 'string') {
      const request: UpdateSongRequest = {
        title: this.updateSongForm.value.title,
        isPendingReview: this.song.isPendingReview,
        songData: this.song.songData
      };
      this.update.emit(request);
    }
  }
}
