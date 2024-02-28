import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() group!: FormGroup;
  @Input() controlName: any | FormControl;
  @Input() inputType!: string;
  @Input() label!: string;
  @Input() placeholder!: string;

  ngOnChanges() {
    console.log(this.controlName);
  }
}
