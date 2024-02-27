import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../model/User';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,HttpClientModule],
  providers:[UserService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  users:User[]=[]
  
constructor(private userservice: UserService){}
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
  }

}

