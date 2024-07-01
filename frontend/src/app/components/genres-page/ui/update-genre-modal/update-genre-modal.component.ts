import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Genre } from '../../../../models/as-is/genre';

@Component({
  selector: 'app-update-genre-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './update-genre-modal.component.html',
  styleUrl: './update-genre-modal.component.css'
})
export class UpdateGenreModalComponent {
  @Input() genre!: Genre;
  @Output() close = new EventEmitter<void>();
  @Output() update = new EventEmitter<string>();

  updateGenreForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.updateGenreForm = this.fb.group({
      name: [this.genre?.name || '', Validators.required]
    });
  }

  ngOnChanges(): void {
    if (this.genre) {
      this.updateGenreForm.patchValue({
        name: this.genre.name
      });
    }
  }

  onCancel(): void {
    this.close.emit();
  }

  onUpdate(): void {
    if (this.updateGenreForm.valid) {
      this.update.emit(this.updateGenreForm.value.name);
    }
  }
}
