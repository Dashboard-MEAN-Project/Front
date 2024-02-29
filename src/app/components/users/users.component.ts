import { Component, ViewChild } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { OneUserComponent } from '../one-user/one-user.component';
import { RouterLink } from '@angular/router';
import { User } from '../../model/User';
import { ConfirmationComponent } from '../../modal/confirmation/confirmation.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    OneUserComponent,
    RouterLink,
    ConfirmationComponent,
  ],
  providers: [HttpClient, UserService, ToastrService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  @ViewChild(ConfirmationComponent) modalComponent!: ConfirmationComponent;

  users: User[] = [];
  user: any;
  userid: any;
  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

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
    this.getUsers();
  }
  delete(id: any) {
    this.userService.DeleteUser(id).subscribe({
      next: () => {
        // location.reload();
        this.toastr.success('Done!', 'User Deleted successfully !');
      },
      error: (error) => {
        console.error('Error deleting user:', error);
      },
    });
  }
  logUser(user: any) {
    console.log(user);
  }

  openModal(id: any) {
    if (this.modalComponent) {
      this.modalComponent.openConfirmation();
    } else {
      console.error('لم يتم تحميل المكون الفرعي بعد.');
    }
    this.userid = id;
    return this.userid;
  }

  confirmAction() {
    this.delete(this.userid);
    console.log(this.userid);
  }

  cancelAction() {
    console.log('تم إلغاء الإجراء');
  }
}
