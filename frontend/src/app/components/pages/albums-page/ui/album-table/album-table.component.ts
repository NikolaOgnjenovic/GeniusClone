import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Album} from "../../../../../models/as-is/album";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {last} from "rxjs";

@Component({
  selector: 'app-album-table',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './album-table.component.html',
  styleUrl: './album-table.component.css'
})
export class AlbumTableComponent {
  @Input() albums!: Album[];
  @Output() update = new EventEmitter<Album>();
  @Output() delete = new EventEmitter<Album>();

  onUpdate(album: Album): void {
    this.update.emit(album);
  }

  onDelete(album: Album): void {
    this.delete.emit(album);
  }

  protected readonly last = last;
}
