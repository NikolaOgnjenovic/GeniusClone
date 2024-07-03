import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Playlist } from '../../../../../models/as-is/playlist';

@Component({
  selector: 'app-delete-playlist-page',
  standalone: true,
  imports: [],
  templateUrl: './delete-playlist-page.component.html',
  styleUrl: './delete-playlist-page.component.css'
})
export class DeletePlaylistPageComponent {
  @Input() playlist!: Playlist;
  @Output() close = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
    }

  onCancel() {
    this.close.emit();
  }
}
