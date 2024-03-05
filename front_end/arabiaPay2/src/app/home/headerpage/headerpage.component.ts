import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-headerpage',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './headerpage.component.html',
  styleUrl: './headerpage.component.scss'
})
export class HeaderpageComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Login Page',
        icon: 'pi pi-fw pi-home',
        routerLink: '/',
      },
      {
        label: 'User Page',
        icon: 'pi pi-fw pi-user',
        routerLink: '/userhomepage',
      },
      {
        label: 'Vendor Page',
        icon: 'pi pi-fw pi-user',
        routerLink: '/vendorhomepage',
      },
      {
        label: 'Admin Page',
        icon: 'pi pi-fw pi-user',
        routerLink: '/adminhomepage',
      },
      {
        label: 'Contact Us',
        icon: 'pi pi-fw pi-phone',
        routerLink: '/contact',
      },
      {
        label: 'Sign up here',
        icon: 'pi pi-fw pi-sign-in',
        routerLink: '/signup',
      },
      {
        label: 'Forgot',
        icon: 'pi pi-fw pi-apple',
        routerLink: '/forgot',
      },
      
    ];
  }
}

