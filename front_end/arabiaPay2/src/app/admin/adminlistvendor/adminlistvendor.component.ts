import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { AdminheaderComponent } from '../adminheader/adminheader.component';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-adminlistvendor',
  standalone: true,
  imports: [TableModule, HttpClientModule, AdminheaderComponent],
  providers : [UserService],
  templateUrl: './adminlistvendor.component.html',
  styleUrl: './adminlistvendor.component.scss'
})
export class AdminlistvendorComponent {
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
