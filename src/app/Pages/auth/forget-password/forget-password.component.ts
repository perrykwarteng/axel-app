import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css',
})
export class ForgetPasswordComponent {
  forgotPassword: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.forgotPassword = this._fb.group({
      email: [, [Validators.required, Validators.email]],
    });
  }

  forgotPasswordProcess() {
    if (this.forgotPassword.valid) {
      console.log(this.forgotPassword.value);
    }
  }
}
