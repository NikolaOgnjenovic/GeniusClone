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
    const request: CreateSongRequest = {
      songData: this.getSongData(),
      isPendingReview: false,
      title: this.createSongForm.value.title
    };
    this.create.emit(request);
  }

  getSongData(): string {
    const input = document.getElementById('data') as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const base64String = this.arrayBufferToBase64(arrayBuffer);
        return base64String;
      }
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };
  
      reader.readAsArrayBuffer(file);
    } else {
      console.error('No file selected or input element not found.');
    }
    return "";
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
