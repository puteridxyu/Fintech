import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from "primeng/password";
import { HeaderpageComponent } from '../headerpage/headerpage.component';
import { FooterpageComponent } from '../footerpage/footerpage.component';
import { Router } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-signuppage',
  standalone: true,
  imports: [CommonModule, CheckboxModule, PasswordModule, InputTextModule, ButtonModule, HeaderpageComponent, FooterpageComponent, RippleModule],
  templateUrl: './signuppage.component.html',
  styleUrl: './signuppage.component.scss'
})
export class SignuppageComponent {
  
  constructor (private primengConfig: PrimeNGConfig, private router: Router) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  navigateToUserhomepage() {
    this.router.navigate(['/userhomepage']);
  }
  goToLoginpage() {
    this.router.navigate(['/']);
  }


}
