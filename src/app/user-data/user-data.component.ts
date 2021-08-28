import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  myUser: User[] = []; 

  constructor(public user_service: UserServiceService) { }

  getUser(searchTerm:any){
    this.user_service.getUser(searchTerm).subscribe((data) => {
      this.myUser = data;
      console.log(this.myUser)
      
    });
  }

  ngOnInit(){
    this.getUser("Moses-254-Mugo")
  }

}
