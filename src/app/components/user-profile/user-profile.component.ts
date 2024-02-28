import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../model/User';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [HttpClientModule, RouterLink, FormsModule, CommonModule],
  providers: [UserService, HttpClientModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent implements OnInit {
  _id : any;
  // data:User[]=[]
  UpdatedUser: any;
  user: any;
  role = 'admin';
  src = '../../../assets/images/maleuser.png';
  confirmation = false;
  newData:any
  constructor(
    myRoute: ActivatedRoute,
    private myService: UserService,
    private router: Router
  ) {
    this._id = myRoute.snapshot.params['id'];
  }
  ngOnInit() {
    this.myService.getAllUsers().subscribe({
      next: (data: User[]) => {

        this.newData = data.filter((user)=> user._id === this._id)
        this.user=this.newData[0];
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
    this.confirmation = confirm('Do You Want To Save This Changes?');
    if (this.confirmation) {
      this.myService.updateUserDetails(this._id, this.user).subscribe();
      this.router.navigate(['/dashboard/users']);
    } else {
      this.router.navigate(['/dashboard/users']);
    }
  }
  cancel() {
    this.router.navigate(['/dashboard/users']);
  }
}
