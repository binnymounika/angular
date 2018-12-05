import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestAPIUsersServiceService {

  constructor( private http:HttpClient) { }

  getRemoteUsers()
  {
    return this.http.get("http://localhost:3000/users")
          
  }
}
