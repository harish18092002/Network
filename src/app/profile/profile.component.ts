import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

goToaddprofile() {
    this.router.navigate(['./addprofile']);
  }
  goTohome(){
    this.router.navigate(['./home']);
  }
  
  public users:{name: string ; place : string ; image: string}[]=[
    {
      image: "/assets/img/arun.png",
      name: 'Harish',
      place: 'Chennai',
    },
    {
      image: "/assets/img/arun 1.png",
      name: "Arun",
      place : 'Chennai',
    },
    {
      image: "/assets/img/arun.png",
      name: 'Madhan',
      place: 'Chennai',
    },
    {
      image: "/assets/img/arun 1.png",
      name: 'Abin',
      place: 'Chennai',
    },
    {
      image: "/assets/img/arun.png",
      name: 'Tazeen',
      place: 'Chennai',
    },
    {
      image: "/assets/img/arun.png",
      name: 'Sivaram',
      place: 'Chennai',
    },
    {
      image: "/assets/img/arun 1.png",
      name: 'Akash',
      place: 'Chennai',
    },
    {
      image: "/assets/img/arun.png",
      name: 'Kumaran',
      place: 'Chennai',
    },
  
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectCurrentUser(data :any ){
    console.log('users',data)
  }
  


}
