import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Artist } from '../../../../models/as-is/artist';

@Component({
  selector: 'app-delete-artist-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-artist-modal.component.html',
  styleUrl: './delete-artist-modal.component.css'
})
export class DeleteArtistModalComponent {

  @Input() artist!: Artist;
  @Output() close = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
    }

  onCancel() {
    this.close.emit();
  }
}
