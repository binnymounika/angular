import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from './../../services/productservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
allProducts:any
  constructor(private prdService:ProductserviceService,private router:Router) { }

  ngOnInit() {
    this.getAPIData()
  }
 getAPIData()
{
  this.prdService.getRemoteProducts().subscribe((data) =>
  {
    console.log(data)
    this.allProducts = data
    console.log(this.allProducts)

  })

}
}
