import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderpageComponent } from '../headerpage/headerpage.component';
import { FooterpageComponent } from '../footerpage/footerpage.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { PrimeNGConfig } from 'primeng/api';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule, 
    HeaderpageComponent, 
    FooterpageComponent, 
    CheckboxModule, 
    InputTextModule, 
    ButtonModule, 
    RippleModule,
    InputGroupModule,
    InputGroupAddonModule,
    HttpClientModule,
    ReactiveFormsModule
    ],
  providers: [UserService],
  templateUrl: './homepage.component.html', 
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  loginUserForm!: FormGroup;

  constructor (private primengConfig: PrimeNGConfig, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() : void {
    this.primengConfig.ripple = true;
    this.loginUserForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }
  navigateToUserhomepage() {
    this.router.navigate(['/userhomepage']);
  }
  goToSignUpPage(){
    this.router.navigate(['/signup']);
  }
  goToForgotPage(){
    this.router.navigate(['/forgot']);
  }
  
}
