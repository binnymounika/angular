import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Localservice1Service {
  friends=['ol','ko','po']
returnmyMessage(){   
   return "mouni"
}
sayHelloService1(){
  console.log("service 1")
}
  constructor() { }
}
