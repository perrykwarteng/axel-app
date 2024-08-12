import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  isOpen: boolean = false;
  viewPassword() {
    this.isOpen = !this.isOpen;
  }
  signInForm: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.signInForm = this._fb.group({
      email: [, [Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(6)]],
    });
  }

  signInProcess() {
    if (this.signInForm.valid) {
      console.log(this.signInForm.value);
    }
  }
}
