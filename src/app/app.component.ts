import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'heavencoffee';
  menu: any;
  navbar: any;
  listener: any;

  constructor(private renderer2: Renderer2) {
    this.listener = this.renderer2.listen('window', 'scroll', (e) => {
      if (this.menu) {
        this.menu.classList.remove('fa-times');
        this.navbar.classList.remove('active');
      }

    });
  }

  onNavclick() {
    this.menu = <HTMLElement>document.querySelector('#menu-btn');
    this.navbar = <HTMLElement>document.querySelector('.header .flex .navbar');
    this.menu.classList.toggle('fa-times');
    this.navbar.classList.toggle('active');
  }


}
