import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-band-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-band-modal.component.html',
  styleUrl: './create-band-modal.component.css'
})
export class CreateBandModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() create = new EventEmitter<string>();

  createBandForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createBandForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onCancel(): void {
    this.close.emit();
  }

  onCreate(): void {
    if (this.createBandForm.valid) {
      this.create.emit(this.createBandForm.value.name);
    }
  }
}
