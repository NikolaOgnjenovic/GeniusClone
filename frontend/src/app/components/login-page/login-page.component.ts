import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {LoginRequest} from "../../models/auth/login-request";
import {AuthState} from "../../state/auth-state";

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
  constructor(private authState: AuthState) { }

  login(email: string, password: string): void {
    const request: LoginRequest = {email, password};
    this.authState.login(request);
  }
}
