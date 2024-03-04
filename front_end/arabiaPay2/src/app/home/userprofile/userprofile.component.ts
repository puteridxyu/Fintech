import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderpageComponent } from '../headerpage/headerpage.component';
import { FooterpageComponent } from '../footerpage/footerpage.component';

@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [CommonModule, HeaderpageComponent, FooterpageComponent],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.scss'
})
export class UserprofileComponent {

}
