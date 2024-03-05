import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { ClientService } from 'src/app/services/client.service';
import { VendorService } from 'src/app/services/vendor.service';


@Component({
  selector: 'app-signuppage',
  standalone: true,
  imports: [
    CommonModule, 
    CheckboxModule, 
    PasswordModule, 
    InputTextModule, 
    ButtonModule, 
    HeaderpageComponent, 
    FooterpageComponent, 
    RippleModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, ClientService, VendorService],
  templateUrl: './signuppage.component.html',
  styleUrl: './signuppage.component.scss'
})
export class SignuppageComponent implements OnInit {
  
  signupUserForm!: FormGroup;

  constructor (
    private primengConfig: PrimeNGConfig, 
    private router: Router, 
    private userService: UserService,
    private clientService: ClientService,
    private vendorService: VendorService,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.signupUserForm = this.formBuilder.group({
      username: [null, [Validators.required]],


  }
  navigateToUserhomepage() {
    this.router.navigate(['/userhomepage']);
  }
  goToLoginpage() {
    this.router.navigate(['/']);
  }



}
