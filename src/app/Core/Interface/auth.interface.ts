export interface SignUp {
  fullName: string;
  userName: string;
  phoneNumber: number;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignIn {
  email: string;
  password: string;
}
