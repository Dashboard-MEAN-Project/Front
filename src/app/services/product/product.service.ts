import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const products_db = 'http://localhost:5000/cont/content';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private myproduct: HttpClient) { }
  getAllProductss() {
    return this.myproduct.get(products_db);
    
  }


}