import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorheaderComponent } from '../vendorheader/vendorheader.component';


@Component({
  selector: 'app-vendorlisttransaction',
  standalone: true,
  imports: [CommonModule, VendorheaderComponent],
  templateUrl: './vendorlisttransaction.component.html',
  styleUrl: './vendorlisttransaction.component.scss'
})
export class VendorlisttransactionComponent {

}
