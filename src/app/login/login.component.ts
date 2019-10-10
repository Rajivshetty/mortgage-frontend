import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MortgageService } from '../mortgage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user;
  passwrd;
  userInfo;
  constructor(private router: Router, private mortgageSerive: MortgageService) { }

  ngOnInit() {

  }

  userLogin() {
    if (this.user == "David" && this.passwrd == "Sone") {
      alert('Login Success')
      this.router.navigate(['\dashboard']);
    } else {
      alert("Login Failed");
    }
  }

  /* Login with Validation */
  // userLogin(username: string, password: string): void {
  //   console.log(username, password);
  //   console.log('Login component');
  //   this.mortgageSerive.login()
  //     .subscribe(data => {
  //       this.userInfo = data;
  //       console.log('this.userInfo', this.userInfo);
  //       if (this.user == "David" && this.passwrd == "Sone") {
  //         alert('Login Success')
  //         this.router.navigate(['\dashboard']);
  //       }
  //     }, error => alert('Given Details Not Matching...'))
  // }
}
