import { Routes } from '@angular/router';
import { SigninComponent } from './Pages/auth/signin/signin.component';
import { ForgetPasswordComponent } from './Pages/auth/forget-password/forget-password.component';
import { SignupComponent } from './Pages/auth/signup/signup.component';
import { DashboardComponent } from './Pages/dashboard/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'sign-up', component: SignupComponent },
];
