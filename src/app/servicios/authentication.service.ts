import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn = false;

  constructor() {}

  setLoggedIn(value) {
    this.isLoggedIn = value;
  }
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
