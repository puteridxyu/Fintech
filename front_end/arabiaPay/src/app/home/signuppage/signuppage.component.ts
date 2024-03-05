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
import { UserService } from '../../services/user.service';;
import { ClientService } from '../../services/client.service';;
import { VendorService } from '../../services/vendor.service';


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
      password: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phone_no: [null, [Validators.required]],
      user_id: [null, [Validators.required]],
    });
  
  onSubmit() {

    const password = this.signupUserForm.value.password;
    const email = this.signupUserForm.value.email;
    const phone_no = this.signupUserForm.value.phone_no;
    const user_id = this.signupUserForm.value.user_id;
    const loginData = {"username":}
  }

  
  }  
  
    navigateToUserhomepage() {
    this.router.navigate(['/userhomepage']);
  }
  goToLoginpage() {
    this.router.navigate(['/']);
  }



}
