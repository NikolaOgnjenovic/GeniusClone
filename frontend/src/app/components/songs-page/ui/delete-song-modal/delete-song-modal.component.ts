import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Song } from '../../../../models/as-is/song';

@Component({
  selector: 'app-delete-song-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-song-modal.component.html',
  styleUrl: './delete-song-modal.component.css'
})
export class DeleteSongModalComponent {
  @Input() song!: Song;
  @Output() close = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  onCancel(): void {
    this.close.emit();
  }

  onDelete(): void {
    this.delete.emit();
  }
}
