import { Injectable, Signal, computed, effect, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse } from '../models/login.model';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  user: string;
}
const TOKEN_KEY = 'auth_token';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = 'https://fakestoreapi.com';

  isLoggedIn = signal<boolean>(!!localStorage.getItem(TOKEN_KEY));
  token = signal<string | null>(localStorage.getItem(TOKEN_KEY));
  username = signal<string>('');
  isAdmin = computed(() => this.username() === 'johnd');

  constructor(private http: HttpClient) {
    effect(() => {
      const t = this.token();
      if (t) {
        localStorage.setItem(TOKEN_KEY, t);
        this.decodeToken(t);
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
    this.username.set('');
    this.token.set(null);
  }

  getUserName(): Signal<string> {
    return this.username;
  }

  private decodeToken(token: string) {
    try {
      const payload = jwtDecode<JwtPayload>(token);
      this.username.set(payload.user);
    } catch (e) {
      console.error('Erro ao decodificar token:', e);
    }
  }
}
