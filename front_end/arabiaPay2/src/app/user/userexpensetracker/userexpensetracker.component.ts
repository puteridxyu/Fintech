import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserheaderComponent } from '../userheader/userheader.component';
import { FooterpageComponent } from 'src/app/home/footerpage/footerpage.component';

@Component({
  selector: 'app-userexpensetracker',
  standalone: true,
  imports: [CommonModule, UserheaderComponent, FooterpageComponent],
  templateUrl: './userexpensetracker.component.html',
  styleUrl: './userexpensetracker.component.scss'
})
export class UserexpensetrackerComponent {

}
