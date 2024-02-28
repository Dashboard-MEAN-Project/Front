import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private route:Router){}
  // constructor(private productService:ProductService){

  // }

  // productsArr:[{ }]
  productsArr=
  [{id:1,
     title:"hhh",
numOfPro:"4",
price:"25"},

{id:1,
title:"nnnn",
 numOfPro:"4",
price:"25"},
]

deleteProduct(){
  console.log("deleted");
  
}
editProduct(){
  console.log("edit");
  
}

onAdd(id:any){
  this.route.navigate(["/users",id])

}
               
}


