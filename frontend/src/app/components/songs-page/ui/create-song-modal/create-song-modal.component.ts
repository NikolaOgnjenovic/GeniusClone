import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CreateSongRequest } from '../../../../models/songs/create-song-request';

@Component({
  selector: 'app-create-song-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-song-modal.component.html',
  styleUrl: './create-song-modal.component.css'
})
export class CreateSongModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() create = new EventEmitter<CreateSongRequest>();

  createSongForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createSongForm = this.fb.group({
      title: ['', Validators.required],
      data: ['', Validators.required]
  })
  }

  onCancel() {
    this.close.emit();
  }

  onCreate(): void {
    const input = document.getElementById('data') as HTMLInputElement;
    console.log(0);
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      console.log(1);
  
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const base64String = this.arrayBufferToBase64(arrayBuffer);
        console.log(2);
        const request: CreateSongRequest = {
          songData: base64String,
          isPendingReview: false,
          title: this.createSongForm.value.title
        };
        this.create.emit(request);
      };
  
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };
  
      reader.readAsArrayBuffer(file);
    } else {
      console.error('No file selected or input element not found.');
    }
  }

  arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }
  
}
