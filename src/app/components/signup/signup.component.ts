import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    InputComponent,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [HttpClient, AuthService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private authService: AuthService, private route: Router) {}
  signupForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(8),
    ]),

    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.maxLength(11),
      Validators.minLength(11),
    ]),
    gender: new FormControl('', [Validators.required]),
  });

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.signupForm.status === 'VALID') {
      const newUser = { ...this.signupForm.value };
      console.log(newUser);

      this.authService.createUser(newUser).subscribe({
        next: (value) => {
          console.log(value);
          this.route.navigate(['/']);
        },
      });
    } else {
      this.signupForm.markAllAsTouched();
      console.log('not valids');
    }
  }
}
