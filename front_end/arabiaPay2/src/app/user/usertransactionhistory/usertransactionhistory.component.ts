import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserheaderComponent } from '../userheader/userheader.component';

@Component({
  selector: 'app-usertransactionhistory',
  standalone: true,
  imports: [CommonModule, UserheaderComponent],
  templateUrl: './usertransactionhistory.component.html',
  styleUrl: './usertransactionhistory.component.scss'
})
export class UsertransactionhistoryComponent {

}
