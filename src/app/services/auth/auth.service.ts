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
  login(user: any) {
    this.myClint.post(login_url, user).subscribe({
      next: (response:any) => {
        const token=response.accessToken
       console.log(token);
       localStorage.setItem("token",token)
       return token
        
      },
      error: (err) => console.log(err),
    });
  }
  createUser(data: User) {
    this.myClint.post(signup_url, data);
  }
}
// setToken(token: any) {
//   localStorage.setItem('key', 'token');
// }
// let x = this.myService.setToken('asdfghjkl;');
// console.log(x);
