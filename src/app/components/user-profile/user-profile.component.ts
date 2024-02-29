import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../model/User';
import { EditUserConfirmationComponent } from '../../modal/edit-user-confirmation/edit-user-confirmation.component';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterLink,
    FormsModule,
    CommonModule,
    EditUserConfirmationComponent,
  ],
  providers: [UserService, HttpClientModule, ToastrService],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent implements OnInit {
  @ViewChild(EditUserConfirmationComponent)
  modalComponent!: EditUserConfirmationComponent;

  _id: any;
  // data:User[]=[]
  UpdatedUser: any;
  user: any;
  role = 'admin';
  src = '../../../assets/images/maleuser.png';
  confirmation = false;
  newData: any;
  constructor(
    myRoute: ActivatedRoute,
    private myService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this._id = myRoute.snapshot.params['id'];
  }
  ngOnInit() {
    this.myService.getAllUsers().subscribe({
      next: (data: User[]) => {
        this.newData = data.filter((user) => user._id === this._id);
        this.user = this.newData[0];
        console.log(this.user);

        if (this.user.gender === 'female') {
          this.src = '../../../assets/images/femaleuser.png';
        }
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  changeUserDetails() {
    this.myService.updateUserDetails(this._id, this.user).subscribe();
    this.router.navigate(['/dashboard/users']);
    this.toastr.success('Done!', 'User Profile Edited !');
  }
  cancel() {
    this.router.navigate(['/dashboard/users']);
  }

  openModal() {
    if (this.modalComponent) {
      this.modalComponent.openConfirmation();
    } else {
      console.error('لم يتم تحميل المكون الفرعي بعد.');
    }
  }

  confirmAction() {
    this.changeUserDetails();
    console.log(this._id);
  }

  cancelAction() {
    console.log('تم إلغاء الإجراء');
  }
}
