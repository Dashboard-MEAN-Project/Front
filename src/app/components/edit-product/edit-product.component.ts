import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Route, Router, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { ProductsComponent } from '../products/products.component';
@Component({
  selector: 'app-edit-product',
  standalone: true,

  imports: [
    InputComponent,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    ProductsComponent,
  ],
  providers: [ProductService, HttpClient],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent {

 constructor(
    private readonly route: Router,
    private productService: ProductService
  ) {}
  EditProductForm: FormGroup = new FormGroup({
    imageUrl: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    category:new FormControl('')
  });

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.EditProductForm.status === 'VALID') {
      const editedpro = { ...this.EditProductForm.value };
      console.log(editedpro);

      this.productService.editProduct(id,editedpro).subscribe({
        next: (value) => {
          console.log(value);
          this.route.navigate(['/products']);
        },
      });
    } else {
      this.EditProductForm.markAllAsTouched();
      console.log('not valids');
    }
  }
}


