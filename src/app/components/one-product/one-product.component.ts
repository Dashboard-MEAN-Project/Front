import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-one-product',
  standalone: true,
  imports: [],
  templateUrl: './one-product.component.html',
  styleUrl: './one-product.component.css',
})
export class OneProductComponent {
  @Input() oneproduct: any;
}
