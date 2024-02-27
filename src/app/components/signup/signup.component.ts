import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import {ReactiveFormsModule}from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule, CommonModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})


export class SignupComponent {
  constructor(private authService:AuthService){
  }
  signupForm: FormGroup = new FormGroup({

    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(8),
      
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email,
      
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.maxLength(11),
      Validators.minLength(11),

    ]),
    gender: new FormControl('', [
      Validators.required])
  });

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.signupForm.status === 'VALID') {
      const newUser = {...this.signupForm.value}
      // console.log(newUser);
      
      this.authService.createUser(newUser)
    } else {
      this.signupForm.markAllAsTouched();
      console.log('not valids');
    }
  }
}


