import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   
   signupform!: FormGroup; 
  constructor(private router: Router) {}

  ngOnInit(): void { 
    this.signupform = new FormGroup({
      'mail' : new FormControl(),
      'username' : new FormControl(null),
           'pw' : new FormControl(null),
    });
}
  goToprofile() {
    this.router.navigate(['./profile']);
  }
 onSubmit(){
 localStorage.setItem('User', JSON.stringify(this.signupform.value));
this.signupform.reset();
this.goToprofile();

 }

}
