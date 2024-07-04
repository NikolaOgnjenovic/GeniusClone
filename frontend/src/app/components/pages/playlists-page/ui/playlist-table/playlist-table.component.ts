import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Playlist } from '../../../../../models/as-is/playlist';
import {NgForOf, NgIf} from '@angular/common';
import {AuthState} from "../../../../../state/auth-state";

@Component({
  selector: 'app-playlist-table',
  standalone: true,
    imports: [
        NgForOf,
        NgIf
    ],
  templateUrl: './playlist-table.component.html',
  styleUrl: './playlist-table.component.css'
})
export class PlaylistTableComponent {
  @Input() playlists: Playlist[] = [];
  @Output() update = new EventEmitter<Playlist>();
  @Output() delete = new EventEmitter<Playlist>();
  @Output() visit = new EventEmitter<Playlist>();

  constructor(protected readonly authState: AuthState) {}

  onUpdate(playlist: Playlist) {
    this.update.emit(playlist);
  }

  onDelete(playlist: Playlist)  {
    this.delete.emit(playlist);
  }

  visitPlaylist(playlist: Playlist) {
    this.visit.emit(playlist);
  }
}
