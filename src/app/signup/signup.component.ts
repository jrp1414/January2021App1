import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
    `
    input.ng-touched.ng-invalid{
      border-color: crimson; 
      border-width: 2px;
    }
    `
  ]
})
export class SignupComponent implements OnInit, AfterViewInit {
  @ViewChild("signupform") signupform:NgForm;
  constructor(private auth:AuthService,private router:Router) { }
  ngAfterViewInit(): void {
    // console.log(this.signupform);
  }
  //form-control ng-untouched ng-pristine ng-invalid
  ngOnInit(): void {
    // var user = {
    //   FirstName: "Ram",
    //   LastName: "Sharma",
    //   EmailId: "ram@gmail.com",
    //   MobileNo: "9889858998",
    //   Password: "test",
    //   ConfirmPassword: "test",
    //   Details: {
    //     TermsAndConditions:true,
    //     Gender:"male",
    //     Address:"Test",
    //     City:"Pune",
    //     Skills:["C#","Angular"]
    //   }
    // };
    // setTimeout(() => {
    //   this.signupform.setValue(user);
    // }, 0);
    // setTimeout(() => {
    //   this.signupform.patchValue(user);
    // }, 0);
  }

  // onSubmit(){
  //   console.log(this.signupform);
  // }

  onSubmit(value) {
    this.auth.signup(value).subscribe((params:any)=>{
      this.router.navigate(["home"]);      
    });    
  }

  

}
