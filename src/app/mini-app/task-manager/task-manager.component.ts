import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
counter=0
salary=100
myDate =new Date();
oneTask="Add your Task..."
myString=["mouni","anitha","chinni"]
score=[25,5,1,0,88,55,44]
myTasks=['Go and get some mango lassi','plan the weekend','Identify some examples','some other task']
  constructor() { }
comTasks=[]
  ngOnInit() {
  }
sayHello=function()
{
  ++this.counter
 console.log("button  clicked "+this.counter)
 this.myTasks.push(this.oneTask)

}
taskDone(currentTask){
  console.log("index value:"+currentTask)
  this.comTasks.push(this.myTasks[currentTask])
 this.myTasks.splice(currentTask,1)

}
}
