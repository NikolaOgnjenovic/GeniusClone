import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Band} from "../../../../models/as-is/band";

@Component({
  selector: 'app-delete-band-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-band-modal.component.html',
  styleUrl: './delete-band-modal.component.css'
})
export class DeleteBandModalComponent {
  @Input() band!: Band;
  @Output() close = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  onCancel(): void {
    this.close.emit();
  }

  onDelete(): void {
    this.delete.emit();
  }
}
