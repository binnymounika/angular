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
user={
  "name":"mouni",
  "email":"binnymounika",
  "address":{
    "geo":{
          "lat":"88.88",
          "lng":"34.34"
    }
  }
}
postUser()
{
   this.userService.createUser(this.user).subscribe((response) => {

console.log(this.user)})
 this.userService.getRemoteUsers().subscribe((response) =>{
    this.allUsers = response
 })
}
deleteUser(i)
{
  console.log(i)
  
   this.userService.delUser(i).subscribe((response) => {

console.log(this.user)})
 this.userService.getRemoteUsers().subscribe((response) =>{
    this.allUsers = response
 })
}
}
