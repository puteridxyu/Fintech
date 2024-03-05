import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserheaderComponent } from '../userheader/userheader.component';

@Component({
  selector: 'app-usertransactionpage',
  standalone: true,
  imports: [CommonModule, UserheaderComponent],
  templateUrl: './usertransactionpage.component.html',
  styleUrl: './usertransactionpage.component.scss'
})
export class UsertransactionpageComponent {

}
