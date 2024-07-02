import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Band} from "../../../../../models/as-is/band";

@Component({
  selector: 'app-bands-table',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './bands-table.component.html',
  styleUrl: './bands-table.component.css'
})
export class BandsTableComponent {
  @Input() bands: Band[] = [];
  @Output() update = new EventEmitter<Band>();
  @Output() delete = new EventEmitter<Band>();

  onUpdate(band: Band): void {
    this.update.emit(band);
  }

  onDelete(band: Band): void {
    this.delete.emit(band);
  }
}
