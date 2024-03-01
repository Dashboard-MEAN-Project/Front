import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserProductsComponent } from '../user-products/user-products.component';

@Component({
  selector: 'app-userhome',
  standalone: true,
  imports: [NavbarComponent, UserProductsComponent],
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css',
})
export class UserhomeComponent {}
