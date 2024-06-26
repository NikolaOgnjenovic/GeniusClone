import { Component } from '@angular/core';
import {AuthState} from "../../state/auth-state";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";

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
  constructor(readonly authState: AuthState, private readonly router: Router) {}

  logout(): void {
    this.authState.logout();
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
