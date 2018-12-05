import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from  '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { GrandParentComponent } from './grand-parent/grand-parent.component';
import { FatherComponent } from './father/father.component';
import { MotherComponent } from './mother/mother.component';
import { TaskManagerComponent } from './mini-app/task-manager/task-manager.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { StringSortPipePipe } from './myPipes/string-sort-pipe.pipe';
import { NumberSortPipePipe } from './myPipes/number-sort-pipe.pipe';
import { ConsumeLocalService1Component } from './consumeService/consume-local-service1/consume-local-service1.component';
import { ConsumeLocalService2Component } from './consumeService/consume-local-service2/consume-local-service2.component';
import { UsersAPIComponentComponent } from './remote/users-apicomponent/users-apicomponent.component';
import { AutoSearchPipePipe } from './myPipes/auto-search-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GrandParentComponent,
    FatherComponent,
    MotherComponent,
    TaskManagerComponent,
    NotFoundComponent,
    StringSortPipePipe,
    NumberSortPipePipe,
    ConsumeLocalService1Component,
    ConsumeLocalService2Component,
    UsersAPIComponentComponent,
    AutoSearchPipePipe
  ],
  imports: [
    BrowserModule,
    
    FormsModule,
    HttpClientModule,
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
       path:'consumelocal1',
       component:ConsumeLocalService1Component
  },
   {
       path:'consumelocal2',
       component:ConsumeLocalService2Component
  },
  {
       path:'remotedata',
       component:UsersAPIComponentComponent
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
