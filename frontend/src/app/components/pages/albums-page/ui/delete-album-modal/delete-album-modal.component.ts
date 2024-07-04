import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Album} from "../../../../../models/as-is/album";

@Component({
  selector: 'app-delete-album-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-album-modal.component.html',
  styleUrl: './delete-album-modal.component.css'
})
export class DeleteAlbumModalComponent {
  @Input() album!: Album;
  @Output() delete = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }

  onCancel() {
    this.close.emit();
  }
}
