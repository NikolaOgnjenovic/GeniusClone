import {NgForOf, NgIf} from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Song} from "../../../../../models/as-is/song";
import {AuthState} from "../../../../../state/auth-state";

@Component({
  selector: 'app-songs-table',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './songs-table.component.html',
  styleUrl: './songs-table.component.css'
})
export class SongsTableComponent {
  @Input() songs: Song[] = [];
  @Output() update = new EventEmitter<Song>();
  @Output() delete = new EventEmitter<Song>();

  constructor(protected readonly authState: AuthState) {}

  onUpdate(song: Song): void {
    this.update.emit(song);
  }

  onDelete(song: Song): void {
    this.delete.emit(song);
  }
}
