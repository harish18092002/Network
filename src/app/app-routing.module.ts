import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { SingleprofileComponent } from './singleprofile/singleprofile.component';
// import { TagchipsComponent } from './tagchips/tagchips.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'profile/:id',
        component: SingleprofileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'addprofile',
        component: AddprofileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'singleprofile',
        component: SingleprofileComponent,
        canActivate: [AuthGuard],
      },
      { path: '**', redirectTo: 'home' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
