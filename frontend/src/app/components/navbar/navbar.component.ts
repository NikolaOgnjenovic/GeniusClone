import { Component } from '@angular/core';
import {AuthState} from "../../state/auth-state";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(readonly authState: AuthState) {}

  logout(): void {
    this.authState.logout();
  }
}
