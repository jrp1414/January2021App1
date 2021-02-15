import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "http://localhost:44319/";
  constructor(private http: HttpClient) { }

  isAuthenticated: boolean = false;
  signin(user: any) {
    return this.http.post(this.baseUrl + "SignIn", user);
  }
  signup(user: any) {
    return this.http.post(this.baseUrl + "SignUpUser", user);
  }
}
