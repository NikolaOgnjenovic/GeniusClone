import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {AuthState} from "../../../state/auth-state";

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {
  onButtonClick: (email: string, password: string) => void;

  constructor(private route: ActivatedRoute, private authState: AuthState) {
    const isLogin = this.route.snapshot.params['login'] === 'login';

    if (isLogin) {
      this.onButtonClick = this.login;
    } else {
      this.onButtonClick = this.register;
    }
  }

  private login(email: string, password: string): void {
    this.authState.login({ email, password });
  }

  private register(email: string, password: string): void {
    this.authState.register({ email, password });
  }
}
