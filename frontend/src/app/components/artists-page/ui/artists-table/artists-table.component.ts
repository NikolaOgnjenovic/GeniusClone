import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Artist } from '../../../../models/as-is/artist';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-artists-table',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './artists-table.component.html',
  styleUrl: './artists-table.component.css'
})
export class ArtistsTableComponent {

  @Input() artists: Artist[] = [];
  @Output() delete = new EventEmitter<Artist>();
  @Output() update = new EventEmitter<Artist>();

  constructor() {}

  onUpdate(artist: Artist) {
    this.update.emit(artist);
  }

  onDelete(artist: Artist) {
    this.delete.emit(artist);
  }
}
