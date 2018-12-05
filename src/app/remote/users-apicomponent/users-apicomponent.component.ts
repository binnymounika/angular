import { RestAPIUsersServiceService } from './../../services/rest-apiusers-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-apicomponent',
  templateUrl: './users-apicomponent.component.html',
  styleUrls: ['./users-apicomponent.component.css']
})
export class UsersAPIComponentComponent implements OnInit {

allUsers:any
  constructor(private userService:RestAPIUsersServiceService) { }

  ngOnInit() {
    this.getAPIData()
  }
getAPIData()
{
  this.userService.getRemoteUsers().subscribe((data) =>
  {
    console.log(data)
    this.allUsers = data
    console.log(this.allUsers)

  })

}
}