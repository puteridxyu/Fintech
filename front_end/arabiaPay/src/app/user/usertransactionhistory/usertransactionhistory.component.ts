import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserheaderComponent } from '../userheader/userheader.component';
import { UserService } from '../../services/user.service';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { MenuItem } from 'primeng/api';
import { FooterpageComponent } from '../../home/footerpage/footerpage.component';


@Component({
  selector: 'app-usertransactionhistory',
  standalone: true,
  imports: [CommonModule, UserheaderComponent, TableModule, HttpClientModule, FooterpageComponent],
  providers : [ UserService],
  templateUrl: './usertransactionhistory.component.html',
  styleUrl: './usertransactionhistory.component.scss'
})
export class UsertransactionhistoryComponent {

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
