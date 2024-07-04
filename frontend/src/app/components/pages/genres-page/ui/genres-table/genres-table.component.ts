import { Component, EventEmitter, Input, Output } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Genre} from "../../../../../models/as-is/genre";
import {ArtistService} from "../../../../../services/artist.service";
import {AuthState} from "../../../../../state/auth-state";

@Component({
  selector: 'app-genres-table',
  standalone: true,
    imports: [
        NgForOf,
        NgIf
    ],
  templateUrl: './genres-table.component.html',
  styleUrl: './genres-table.component.css'
})
export class GenresTableComponent {
  @Input() genres: Genre[] = [];
  @Output() update = new EventEmitter<Genre>();
  @Output() delete = new EventEmitter<Genre>();

  constructor(protected readonly authState: AuthState) { }

  onUpdate(genre: Genre): void {
    this.update.emit(genre);
  }

  onDelete(genre: Genre): void {
    this.delete.emit(genre);
  }
}
