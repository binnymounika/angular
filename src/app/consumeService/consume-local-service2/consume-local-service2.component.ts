import { Component, OnInit } from '@angular/core';
import {Localservice1Service} from 'src/app/services/localservice1.service'
@Component({
  selector: 'app-consume-local-service2',
  templateUrl: './consume-local-service2.component.html',
  styleUrls: ['./consume-local-service2.component.css']
})
export class ConsumeLocalService2Component implements OnInit {

  constructor(private ls:Localservice1Service) { }

  ngOnInit() {
    console.log(this.ls.friends);
    this.ls.friends.push('fly')
  }

}
