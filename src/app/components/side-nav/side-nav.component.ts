import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],

  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',
})
export class SideNavComponent {
  constructor(private router: Router) {}
  logOut() {
    this.router.navigate(['/']);
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
  }
}
