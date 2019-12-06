import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { Param2Component } from './home/param2/param2.component';
import { Param3Component } from './home/param3/param3.component';
import { Param4Component } from './home/param4/param4.component';


const routes: Routes = [
{
  path:'', component:SigninComponent
},
{
  path:'register', component:RegisterComponent
},
{
  path:'home', component:HomeComponent
},
{
  path:'home/param2', component:Param2Component
},
{
  path:'home/param3', component:Param3Component
},
{
  path:'home/param4', component:Param4Component
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
