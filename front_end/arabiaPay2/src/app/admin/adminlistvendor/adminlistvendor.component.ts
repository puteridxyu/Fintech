import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminheaderComponent } from '../adminheader/adminheader.component';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-adminlistvendor',
  standalone: true,
  imports: [CommonModule, AdminheaderComponent],
  templateUrl: './adminlistvendor.component.html',
  styleUrl: './adminlistvendor.component.scss'
})
export class AdminlistvendorComponent {

}
