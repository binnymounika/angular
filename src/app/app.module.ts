import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from  '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
import { UserDetailComponent } from './remote/user-detail/user-detail.component';
import { TemplateFormComponent } from './form/template-form/template-form.component';
import { ModelFormComponent } from './form/model-form/model-form.component';
import { AnimationComponent } from './animations/animation/animation.component';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';
import { ProductpageComponent } from './product/productpage/productpage.component';


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
    AutoSearchPipePipe,
    UserDetailComponent,
    TemplateFormComponent,
    ModelFormComponent,
    AnimationComponent,
    LandingPageComponent,
    ProductpageComponent
    
  ],
  imports: [
    BrowserModule,
    
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
       path:'remotedata/:myid',
      component:UserDetailComponent
  },
  {
       path:'templateform',
      component:TemplateFormComponent
  },
  {
       path:'modelform',
      component:ModelFormComponent
  },
  {
       path:'animation',
       component:AnimationComponent
  },
   {
       path:'landing-page',
       component:LandingPageComponent
  },
  {
       path:'productpage',
       component:ProductpageComponent
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
