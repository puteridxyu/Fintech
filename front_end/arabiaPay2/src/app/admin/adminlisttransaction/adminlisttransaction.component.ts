import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminheaderComponent } from '../adminheader/adminheader.component';


@Component({
  selector: 'app-adminlisttransaction',
  standalone: true,
  imports: [CommonModule, AdminheaderComponent],
  templateUrl: './adminlisttransaction.component.html',
  styleUrl: './adminlisttransaction.component.scss'
})
export class AdminlisttransactionComponent {

}
