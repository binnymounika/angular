import { element } from 'protractor';
import { RestAPIUsersServiceService } from './../../services/rest-apiusers-service.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users-apicomponent',
  templateUrl: './users-apicomponent.component.html',
  styleUrls: ['./users-apicomponent.component.css']
})
export class UsersAPIComponentComponent implements OnInit {

allUsers:any
  constructor(private userService:RestAPIUsersServiceService,private router:Router) { }

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
viewDetail(id)
{
  console.log(id)
  //it will navigate to /remoteData/id
  //element.g it will navigate to /remoteData/1
  this.router.navigate(["/remotedata",id])
}
}
