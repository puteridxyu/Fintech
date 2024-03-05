import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserheaderComponent } from '../userheader/userheader.component';

@Component({
  selector: 'app-userexpensetracker',
  standalone: true,
  imports: [CommonModule, UserheaderComponent],
  templateUrl: './userexpensetracker.component.html',
  styleUrl: './userexpensetracker.component.scss'
})
export class UserexpensetrackerComponent {

}
