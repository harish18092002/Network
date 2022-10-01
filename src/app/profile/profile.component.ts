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
  
  public users=[
    {
      // image: "/assets/img/person.png",
      name: 'Harish',
      place: 'Chennai',
    },
    {
      name: "Arun",
      place : 'Chennai',
    },
  
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectCurrentUser(data :any ){
    console.log('users',data)
  }
  


}
