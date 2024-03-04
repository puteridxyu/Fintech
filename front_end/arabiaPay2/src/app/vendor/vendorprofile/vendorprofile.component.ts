import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorheaderComponent } from '../vendorheader/vendorheader.component';

@Component({
  selector: 'app-vendorprofile',
  standalone: true,
  imports: [CommonModule, VendorheaderComponent],
  templateUrl: './vendorprofile.component.html',
  styleUrl: './vendorprofile.component.scss'
})
export class VendorprofileComponent {

}
