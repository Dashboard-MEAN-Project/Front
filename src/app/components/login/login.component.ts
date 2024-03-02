import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputComponent,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterLink,
    RouterLinkActive,
  ],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService: AuthService, private route: Router) {}
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
  });

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.loginForm.status === 'VALID') {
      let user = { ...this.loginForm.value };
      this.authService.login(user).subscribe({
        next: (response: any) => {
          let token = response.accessToken;
          // console.log(token);
          localStorage.setItem('token', token);
          let role = response.roles;
          // console.log(role);
          localStorage.setItem('roles', role);
          if (role === 'admin') {
            this.route.navigate(['/dashboard']);
          } else if (role === 'user') {
            this.route.navigate(['/userhome']);
          } else {
            this.route.navigate(['/']);
          }

          return token;
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
      console.log('not valids');
    }
  }
}
