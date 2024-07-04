import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForOf } from '@angular/common';
import {Genre} from "../../../../../models/as-is/genre";

@Component({
  selector: 'app-genres-table',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './genres-table.component.html',
  styleUrl: './genres-table.component.css'
})
export class GenresTableComponent {
  @Input() genres: Genre[] = [];
  @Output() update = new EventEmitter<Genre>();
  @Output() delete = new EventEmitter<Genre>();

  onUpdate(genre: Genre): void {
    this.update.emit(genre);
  }

  onDelete(genre: Genre): void {
    this.delete.emit(genre);
  }
}
