import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  isOpen: boolean = false;
  viewPassword() {
    this.isOpen = !this.isOpen;
  }

  signUpForm: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.signUpForm = this._fb.group({
      fullName: [, [Validators.required]],
      userName: [, [Validators.required]],
      phoneNumber: [, [Validators.required]],
      email: [, [Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [, [Validators.required, Validators.minLength(6)]],
    });
  }

  signUpProcess() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
    }
  }
}
