import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild("menuItemShow") menuItemShow: ElementRef;
  @ViewChild("menuLinks") menuLinks: ElementRef;
  @ViewChild("menuHamburguer") menuHamburguer: ElementRef;

  userData: any = {};
  nameComplete: string;
  userAdmin: boolean = false;

  constructor(
    private router: Router
  ) {
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
  }

  ngOnInit(): void {
    this.addClick();
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

  addClick(){
    const listElements = document.querySelectorAll('.menu__item__show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');

    listElements.forEach(element => {
      element.addEventListener('click', () => {
        console.log();
        let submenu = element.children[1];
        element.classList.toggle('menu__item__active');
      });
    });
  }

}
