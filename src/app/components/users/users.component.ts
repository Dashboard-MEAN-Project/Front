import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [HttpClient, UserService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe({
      next: (value) => {
        console.log(value.length);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
