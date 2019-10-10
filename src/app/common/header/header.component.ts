import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showLogin: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showDialog() {
    alert(this.showLogin);
    this.showLogin = !this.showLogin;
    alert(this.showLogin);
  }

}
