import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { HttpClient } from '@angular/common/http';
// import { ProductService } from '../../services/product/product.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-products',
  standalone: true,
  providers:[ProductService,HttpClient],
  imports: [HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(
    private route:Router,
    private myService: ProductService
    ){}
  // constructor(private productService:ProductService){

  // }

  // productsArr:[{ }]
  productsArr:any;


  ngOnInit(){


  this.myService.getAllProductss().subscribe({next:(data)=>{this.productsArr=data;
  console.log(this.productsArr);
  },error:(error)=>{console.log("error",error);

  }})
}


deleteProduct(productID:any){this.myService.deleteProduct(productID).subscribe({next:(data)=>{console.log("item deleted")},error:(err)=>{console.log(err);
  // let amount = this.productsArr.length
  // console.log(amount);
  


}})}


editProduct(id:any){
  this.route.navigate(["/edit",id])
  
}

onAdd(id:any){
  this.route.navigate(["/users",id])

}
               
}


