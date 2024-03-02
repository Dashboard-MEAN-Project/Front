import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const post_product = 'http://localhost:5000/cont/content';
const get_product = 'http://localhost:5000/cont/getAllProduct';
const edit_products = 'http://localhost:5000/cont/editcontent';
const del_product = 'http://localhost:5000/cont/deletecontent';
const post_cat = 'http://localhost:5000/category/createCategory';
const get_cat = 'http://localhost:5000/category/getAll';
const update_cat = 'http://localhost:5000/category/updateCategory';
const del_cat = 'http://localhost:5000/category/delete';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private product: HttpClient) {}
  getAllProductss() {
    return this.product.get(get_product, { headers: requestHeaders });
  }

  // getProductsByCategory(id:any){  ////////////do not forget to chage category type
  //   return this.product.get(+"?"+"id"+"="+id)
  //   // return this.product.get(this.DB_URL+"?"+"albumId"+"="+category)
  // }

  

  editProduct(id: number, newUserDetails: any) {
    return this.product.patch(
      edit_products + '/' + id,
      { ...newUserDetails },
      { headers: requestHeaders }
    );
  }

  deleteProduct(id: number) {
    return this.product.delete(del_product + '/' + id, {
      headers: requestHeaders,
    });
  }

  addProduct(data: any) {
    return this.product.post(post_product, data, { headers: requestHeaders });
  }
}

const token = localStorage.getItem('token');
const requestHeaders = {
  Authorization: `Bearer ${token}`,
};
