import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Genre} from "../../../../../models/as-is/genre";

@Component({
  selector: 'app-delete-genre-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-genre-modal.component.html',
  styleUrl: './delete-genre-modal.component.css'
})
export class DeleteGenreModalComponent {
  @Input() genre!: Genre;
  @Output() close = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  onCancel(): void {
    this.close.emit();
  }

  onDelete(): void {
    this.delete.emit();
  }
}
