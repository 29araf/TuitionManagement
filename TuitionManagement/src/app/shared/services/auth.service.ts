import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Add methods for authentication
  login(email: string, password: string) {
    // TODO: Implement login logic
  }

  logout() {
    // TODO: Implement logout logic
  }

  getCurrentUser() {
    // TODO: Get current authenticated user
    return null;
  }

  isAuthenticated(): boolean {
    // TODO: Check if user is authenticated
    return false;
  }
}
