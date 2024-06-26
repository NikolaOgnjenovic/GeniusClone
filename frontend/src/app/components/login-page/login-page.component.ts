import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {LoginRequest} from "../../models/auth/login-request";

@Component({
  selector: 'app-login-page',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  title = 'Login Page';

    constructor(private authService: AuthService) {}

    login(email: string, password: string): void {
      const request: LoginRequest = { email, password };
      this.authService.login(request).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
        },
        error: (error) => {
          console.error('Login error:', error);
        }
      });
    }
}
