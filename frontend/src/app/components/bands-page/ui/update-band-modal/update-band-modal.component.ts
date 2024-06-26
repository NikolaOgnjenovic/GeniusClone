import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Band} from "../../../../models/as-is/band";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-band-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './update-band-modal.component.html',
  styleUrl: './update-band-modal.component.css'
})
export class UpdateBandModalComponent {
  @Input() band!: Band;
  @Output() close = new EventEmitter<void>();
  @Output() update = new EventEmitter<string>();

  updateBandForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.updateBandForm = this.fb.group({
      name: [this.band?.name || '', Validators.required]
    });
  }

  ngOnChanges(): void {
    if (this.band) {
      this.updateBandForm.patchValue({
        name: this.band.name
      });
    }
  }

  onCancel(): void {
    this.close.emit();
  }

  onUpdate(): void {
    if (this.updateBandForm.valid) {
      this.update.emit(this.updateBandForm.value.name);
    }
  }
}
