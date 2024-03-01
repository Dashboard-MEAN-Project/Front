import { Component } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { OneProductComponent } from '../one-product/one-product.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-products',
  standalone: true,
  imports: [OneProductComponent, HttpClientModule],
  providers: [ProductService, HttpClient],
  templateUrl: './user-products.component.html',
  styleUrl: './user-products.component.css',
})
export class UserProductsComponent {
  constructor(private UService: ProductService) {}
  Products: any;
  ngOnInit() {
    this.UService.getAllProductss().subscribe({
      next: (data) => {
        this.Products = data; //[{},{}]
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
