import { Injectable, effect, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse } from '../models/login.model';

const TOKEN_KEY = 'auth_token';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = 'https://fakestoreapi.com';

  isLoggedIn = signal<boolean>(!!localStorage.getItem(TOKEN_KEY));
  token = signal<string | null>(localStorage.getItem(TOKEN_KEY));

  constructor(private http: HttpClient) {
    effect(() => {
      const t = this.token();
      if (t) {
        localStorage.setItem(TOKEN_KEY, t);
      } else {
        localStorage.removeItem(TOKEN_KEY);
      }
      this.isLoggedIn.set(!!t);
    });
  }

  login(req: LoginRequest) {
    return this.http.post<LoginResponse>(`${this.api}/auth/login`, req);
  }

  setToken(token: string) {
    this.token.set(token);
  }

  logout() {
    this.token.set(null);
  }
}
