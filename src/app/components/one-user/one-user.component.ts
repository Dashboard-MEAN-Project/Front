import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-one-user',
  standalone: true,
  imports: [RouterLink],
  providers: [UserService],
  templateUrl: './one-user.component.html',
  styleUrl: './one-user.component.css',
})
export class OneUserComponent implements OnInit {
  constructor(private myService: UserService) {}
  @Input() oneUser: any;
  src = '../../../assets/images/maleuser.png';
  console() {
    console.log('ahmed');
  }
  ngOnInit() {
    if (this.oneUser.gender === 'female') {
      this.src = '../../../assets/images/femaleuser.png';
    }
  }
  delete(id: any) {
    // console.log(id);
    this.myService.DeleteUser(id).subscribe(
      (next) => {
        this.myService.getAllUsers().subscribe();
      },
      (error) => {
        console.error('Error deleting user:', error);
        // Handle error appropriately
      }
    );
  }
}
