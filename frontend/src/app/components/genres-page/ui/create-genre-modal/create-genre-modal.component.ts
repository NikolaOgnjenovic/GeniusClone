import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-genre-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-genre-modal.component.html',
  styleUrl: './create-genre-modal.component.css'
})
export class CreateGenreModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() create = new EventEmitter<string>();

  createGenreForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createGenreForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onCancel(): void {
    this.close.emit();
  }

  onCreate(): void {
    if (this.createGenreForm.valid) {
      this.create.emit(this.createGenreForm.value.name);
    }
  }
}
