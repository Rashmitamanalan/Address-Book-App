import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/users';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  users: any;
  selectedUser?: User;

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((res)=>{
      this.users= res;
      this.sortAsc();
      this.selectedUser= this.users[0];
      console.log(this.users)
    });
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  sortAsc(){
    this.users.sort((a, b) => {
      if (a.name > b.name) { return 1; }
      if (a.name < b.name) { return -1; }
    });
    console.log(this.users)

  }

  sortDesc(){
    this.users.sort((a, b) => {
      if (a.name > b.name) { return -1; }
      if (a.name < b.name) { return  1; }
    });
    console.log(this.users)

  }

}
