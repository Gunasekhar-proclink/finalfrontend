import { Injectable } from '@angular/core';
import { API } from './global';
import {User} from './login.service'

// export interface TokenResponse {
//   msg: string;
//   token: string;
// }

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor() {}

  async signup(credentials: User) {
    return fetch(`${API}/user/signup`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
}
