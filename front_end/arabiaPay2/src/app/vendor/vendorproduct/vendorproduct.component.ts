import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorheaderComponent } from '../vendorheader/vendorheader.component';

@Component({
  selector: 'app-vendorproduct',
  standalone: true,
  imports: [CommonModule, VendorheaderComponent],
  templateUrl: './vendorproduct.component.html',
  styleUrl: './vendorproduct.component.scss'
})
export class VendorproductComponent {

}
