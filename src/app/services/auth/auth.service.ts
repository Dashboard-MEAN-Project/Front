import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../model/User';
const login_url = 'http://localhost:5000/auth/login';
const signup_url = 'http://localhost:5000/auth/register';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private myClint: HttpClient) {}
  // login(user: any) {
  //   this.myClint.post(login_url, user).subscribe({
  //     next: (response: any) => {
  //       const token = response.accessToken;
  //       console.log(token);
  //       localStorage.setItem('token', token);
  //       const role = response;
  //       console.log(role);
  //       localStorage.setItem('roles', role);

  //       return token;
  //     },
  //     error: (err) => console.log(err),
  //   });
  // }

  login(user: any) {
    return this.myClint.post(login_url, user);
  }
  createUser(data: User) {
    return this.myClint.post(signup_url, data);
  }
}
