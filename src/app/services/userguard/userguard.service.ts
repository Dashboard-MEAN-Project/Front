import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserguardService {
  constructor(private router: Router) {}
  canActivate(): boolean {
    if (role === 'user' && token) {
      this.router.navigate(['/userhome']);

      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
const token = localStorage.getItem('token');
const role = localStorage.getItem('roles');
