import {Component} from '@angular/core';
import {RegistrationRequest} from "../../models/auth/registration-request";
import {FormsModule} from "@angular/forms";
import {AuthState} from "../../state/auth-state";

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
  constructor(private authState: AuthState) {}

  register(email: string, password: string): void {
    const request: RegistrationRequest = { email, password };
    this.authState.register(request);
  }
}
