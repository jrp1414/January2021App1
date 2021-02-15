import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  OnSignIn(signin) {
    this.auth.signin(signin.value).subscribe((resp: any) => {
      let token = resp.data;
      localStorage.setItem("token", token);
      // console.log(jwtDecode(token));
      this.auth.isAuthenticated = true;
    });
  }

  SignOut() {
    this.auth.isAuthenticated = false;
    localStorage.removeItem("token");
  }

}
