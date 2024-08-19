import { Injectable } from '@angular/core';
import { API } from './global';
export interface User {
  userName: string;
  password: string;
}

export interface TokenResponse {
  msg: string;
  token: string;
  roleId : string
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  async login(credentials: User): Promise<TokenResponse> {
    return fetch(`${API}/user/login`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
}
