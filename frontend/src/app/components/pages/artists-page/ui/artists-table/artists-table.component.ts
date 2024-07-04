import { Component, EventEmitter, Input, Output } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Artist} from "../../../../../models/as-is/artist";
import {AuthState} from "../../../../../state/auth-state";

@Component({
  selector: 'app-artists-table',
  standalone: true,
    imports: [
        NgForOf,
        NgIf
    ],
  templateUrl: './artists-table.component.html',
  styleUrl: './artists-table.component.css'
})
export class ArtistsTableComponent {
  @Input() artists: Artist[] = [];
  @Output() delete = new EventEmitter<Artist>();
  @Output() update = new EventEmitter<Artist>();

  constructor(protected readonly authState: AuthState) {}

  onUpdate(artist: Artist) {
    this.update.emit(artist);
  }

  onDelete(artist: Artist) {
    this.delete.emit(artist);
  }
}
