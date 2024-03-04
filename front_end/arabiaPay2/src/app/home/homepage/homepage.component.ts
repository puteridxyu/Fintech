import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderpageComponent } from '../headerpage/headerpage.component';
import { FooterpageComponent } from '../footerpage/footerpage.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { PrimeNGConfig } from 'primeng/api';



@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, HeaderpageComponent, FooterpageComponent, CheckboxModule, InputTextModule, ButtonModule, RippleModule],
  templateUrl: './homepage.component.html', 
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  constructor (private primengConfig: PrimeNGConfig, private router: Router) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  navigateToUserhomepage() {
    this.router.navigate(['/userhomepage']);
  }
}
