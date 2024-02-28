import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { OneUserComponent } from '../one-user/one-user.component';
import { RouterLink } from '@angular/router';
import { User } from '../../model/User';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, HttpClientModule, OneUserComponent, RouterLink],
  providers: [HttpClient, UserService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users:User[]=[];
  user: any;
  constructor( private userService: UserService) {}
  src = '../../../assets/images/maleuser.png';
  console() {
    console.log('ahmed');
  }
  getUsers() {
    this.userService.getAllUsers().subscribe({
      next: (value) => {
        this.users = value;
        console.log(this.users);
        
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnInit() {
    this.getUsers();}
    delete(id: any) {
     
      this.userService.DeleteUser(id).subscribe(
       {next:()=> {
          location.reload();
          alert('User deleted successfully.');
        },
        error:(error)=> {
          console.error('Error deleting user:', error);
          
        }} 
          );
    }
    logUser(user:any){
      console.log(user);
      
    }
}
