import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Route, Router, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { ProductsComponent } from '../products/products.component';
@Component({
  selector: 'app-add-product',
  standalone: true,

  imports: [
    InputComponent,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    ProductsComponent,
  ],
  providers: [ProductService, HttpClient, AuthService],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  constructor(
    private authService: AuthService,
    private readonly route: Router,
    private productService: ProductService
  ) {}
  AddProductForm: FormGroup = new FormGroup({
    imageUrl: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),

  });

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.AddProductForm.status === 'VALID') {
      const newpro = { ...this.AddProductForm.value };
      console.log(newpro);

      this.productService.addProduct(newpro).subscribe({
        next: (value) => {
          // console.log(value);
          console.log('value');

          this.route.navigate(['/products']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.AddProductForm.markAllAsTouched();
      console.log('not valids');
    }
  }
}
