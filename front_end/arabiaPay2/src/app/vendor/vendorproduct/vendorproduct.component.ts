import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorheaderComponent } from '../vendorheader/vendorheader.component';
import { MenuItem } from 'primeng/api';
import { UserService } from '../../services/user.service';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-vendorproduct',
  standalone: true,
  imports: [CommonModule, VendorheaderComponent, TableModule, HttpClientModule],
  providers : [ UserService],
  templateUrl: './vendorproduct.component.html',
  styleUrl: './vendorproduct.component.scss'
})
export class VendorproductComponent {

  users: any;
  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }


}
