import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../model/User';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,HttpClientModule],
  providers:[UserService,ProductService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  users:User[]=[]
  products:any;
constructor(
  private userservice: UserService,
  private productService: ProductService
  ){}
  ngOnInit() {
    this.userservice.getAllUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.users = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.productService.getAllProductss().subscribe({next:(data)=>{this.products=data}})

  }


}

