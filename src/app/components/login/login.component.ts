import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule, CommonModule,HttpClientModule],
  providers:[AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService:AuthService){

  }
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]),
  });

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.loginForm.status === 'VALID') {
      const user = {...this.loginForm.value}
      this.authService.login(user)
    } else {
      this.loginForm.markAllAsTouched();
      console.log('not valids');
    }
  }
}