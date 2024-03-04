import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from "primeng/password";
import { HeaderpageComponent } from '../headerpage/headerpage.component';
import { FooterpageComponent } from '../footerpage/footerpage.component';

@Component({
  selector: 'app-signuppage',
  standalone: true,
  imports: [CommonModule, CheckboxModule, PasswordModule, InputTextModule, ButtonModule, HeaderpageComponent, FooterpageComponent],
  templateUrl: './signuppage.component.html',
  styleUrl: './signuppage.component.scss'
})
export class SignuppageComponent {
  password = ""
}
