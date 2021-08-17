import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userData: any = {};
  nameComplete: string;
  userAdmin: boolean = false;

  constructor(
    private router: Router
  ) {
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
  }

  ngOnInit(): void {
    this.nameComplete = this.userData.name;
    this.isAdmin();
  }

  isAdmin(){
    if(this.userData.rol == 'Admin'){
      this.userAdmin = true;
    }
  }

  logoutClick(){
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth/login');
  }

}
