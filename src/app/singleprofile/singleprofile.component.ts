import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singleprofile',
  templateUrl: './singleprofile.component.html',
  styleUrls: ['./singleprofile.component.css']
})
export class SingleprofileComponent implements OnInit {
  @Input ()receiver : any ;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
goTohome(){
  this.router.navigate(['./home']);
}
goToaddprofile(){
  this.router.navigate(['./addprofile']);
}
goToprofile(){
  console.log("this is profile");
  this.router.navigate(['./profile']);
 
}
showelements : boolean = false;
}
