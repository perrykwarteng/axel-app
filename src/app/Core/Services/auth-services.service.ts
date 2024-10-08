import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignIn } from '../Interface/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  api:string = 'http://localhost:3000'

  constructor(private _http: HttpClient) { }

  signIn(){
    return this._http.get(`${this.api}/users`,)
  }

  getUser(){
   const details = localStorage.getItem('user')
   return details ? JSON.parse(details) : null
  }

}
