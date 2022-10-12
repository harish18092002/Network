import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.css']
})
export class AddprofileComponent implements OnInit {

  grid = new FormControl(Validators.required);



  constructor(private router : Router) { }

  ngOnInit(): void {
  }
goTohome(){
  this.router.navigate(['./home']);

}
goToprofile(){
  this.router.navigate(['./profile']);
}
names:string="";
setValue(names:string){
  console.log("Name:",names);
}
}
