import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthServicesService } from '../../../Core/Services/auth-services.service';

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
  constructor(
    private _fb: FormBuilder,
    private authService: AuthServicesService,
    private route: Router
  ) {
    this.signInForm = this._fb.group({
      email: [, [Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(6)]],
    });
  }

  signInProcess() {
    if (this.signInForm.valid) {
      this.authService.signIn().subscribe({
        next: (res: any) => {
          // Check if user data exists
          const user = res.find(
            (user: any) =>
              user.email === this.signInForm.value.email &&
              user.password === this.signInForm.value.password
          );
  
          if (user) {
            console.log(user);
  
            // Store the user object in localStorage as a JSON string
            localStorage.setItem('user', JSON.stringify(user));
  
            // Check user role and navigate accordingly
            if (user.role === 'admin') {
              this.route.navigate(['/dashboard/admin-dashboard']);
            } else if (user.role === 'officer') {
              this.route.navigate(['/dashboard/main-dashboard']);
            }
          } else {
            alert('Invalid credentials, please try again.');
          }
        },
        error: (err) => {
          console.error(err);
          alert('An error occurred during the sign-in process.');
        },
      });
    }
  }
}
