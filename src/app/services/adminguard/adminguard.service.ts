import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminguardService {
  constructor(private router: Router) {}
  canActivate(): boolean {
    if (role === 'admin' && token) {
      console.log('go to home');
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
const token = localStorage.getItem('token');
const role = localStorage.getItem('roles');
