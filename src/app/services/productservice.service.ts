import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }

 getRemoteProducts()
  {
    return this.http.get(" http://localhost:3000/products")
          
  }
  }