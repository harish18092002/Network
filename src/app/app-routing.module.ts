import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { SingleprofileComponent } from './singleprofile/singleprofile.component';
// import { TagchipsComponent } from './tagchips/tagchips.component';


const routes: Routes = [
  {
    path : '',
    component: AppComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'login',component: LoginComponent},
      {path: 'signup',component: SignupComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'profile/:id',component: SingleprofileComponent},
      {path: 'addprofile',component: AddprofileComponent},
      {path : 'singleprofile', component: SingleprofileComponent},
      // {path : 'tagchips' , component: TagchipsComponent},
      {path: '**', redirectTo: 'home'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
