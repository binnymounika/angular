import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from  '@angular/forms';

import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { GrandParentComponent } from './grand-parent/grand-parent.component';
import { FatherComponent } from './father/father.component';
import { MotherComponent } from './mother/mother.component';
import { TaskManagerComponent } from './mini-app/task-manager/task-manager.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    GrandParentComponent,
    FatherComponent,
    MotherComponent,
    TaskManagerComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    
    FormsModule,
  RouterModule.forRoot([
    {
       path:'task-manager',
       component:TaskManagerComponent
  }
  ,
   {
       path:'grand-parent',
       component:GrandParentComponent,
       children:[
         {
           path:'father',
           component:FatherComponent
         },
          {
           path:'mother',
           component:MotherComponent
         }

       ]
  },
   {
       path:'**',
       component:NotFoundComponent
  }
  ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
