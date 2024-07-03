import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Playlist } from '../../../../../models/as-is/playlist';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-playlist-table',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './playlist-table.component.html',
  styleUrl: './playlist-table.component.css'
})
export class PlaylistTableComponent {

  @Input() playlists: Playlist[] = [];
  @Output() update = new EventEmitter<Playlist>();
  @Output() delete = new EventEmitter<Playlist>();
  

  onUpdate(playlist: Playlist) {
    this.update.emit(playlist);
  }

  onDelete(playlist: Playlist)  {
    this.delete.emit(playlist);
  }
}
