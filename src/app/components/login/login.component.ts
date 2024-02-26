import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.loginForm.status === 'VALID') {
      console.log(this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
      console.log('not valids');
    }
  }
}