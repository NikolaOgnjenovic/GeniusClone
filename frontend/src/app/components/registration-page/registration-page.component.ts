import {Component, Input} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {RegistrationRequest} from "../../models/auth/registration-request";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent {
  title = 'Registration Page';

  constructor(private authService: AuthService) {}

  register(email: string, password: string): void {
    const request: RegistrationRequest = { email, password };
    this.authService.register(request).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
      },
      error: (error) => {
        console.error('Registration error:', error);
      }
    });
  }
}
