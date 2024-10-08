import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

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
  constructor(private _fb: FormBuilder, private route: Router) {
    this.signInForm = this._fb.group({
      email: [, [Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(6)]],
    });
  }

  signInProcess() {
    if (this.signInForm.valid) {
      this.route.navigate(['/dashboard/admin-dashboard']);
    }
  }
}
