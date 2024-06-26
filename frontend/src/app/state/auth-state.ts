import {Injectable} from "@angular/core";
import {RegistrationRequest} from "../models/auth/registration-request";
import {RegistrationResponse} from "../models/auth/registration-response";
import {LoginRequest} from "../models/auth/login-request";
import {LoginResponse} from "../models/auth/login-response";
import {AuthService} from "../services/auth.service";
import {User} from "../models/as-is/user";
import {UserRole} from "../models/as-is/user-role";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthState {
  private currentUserKey = 'currentUser';

  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  register(request: RegistrationRequest): void {
    this.authService.register(request).subscribe({
      next: (response) => {
        const user = this.mapResponseToUser(response);
        this.storeCurrentUser(user);
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }

  login(request: LoginRequest): void {
    this.authService.login(request).subscribe({
      next: (response) => {
        const user = this.mapResponseToUser(response);
        this.storeCurrentUser(user);
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }

  getCurrentUser(): User {
    const userJson = localStorage.getItem(this.currentUserKey);
    return userJson ? JSON.parse(userJson) : null;
  }

  logout(): void {
    localStorage.removeItem(this.currentUserKey);
  }

  private storeCurrentUser(user: User): void {
    localStorage.setItem(this.currentUserKey, JSON.stringify(user));
  }

  private handleError(error: any): void {
    let errorMessage;
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
  }

  private mapResponseToUser(user: RegistrationResponse | LoginResponse): User {
    const roles: UserRole[] = user.roles.map((roleStr: string) => UserRole[roleStr as keyof typeof UserRole]);
    return { ...user, roles };
  }
}
