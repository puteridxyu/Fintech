import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminheaderComponent } from '../adminheader/adminheader.component';

@Component({
  selector: 'app-adminhomepage',
  standalone: true,
  imports: [CommonModule, AdminheaderComponent],
  templateUrl: './adminhomepage.component.html',
  styleUrl: './adminhomepage.component.scss'
})
export class AdminhomepageComponent {

}
