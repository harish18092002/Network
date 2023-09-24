import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'] 
})
export class SignupComponent implements OnInit {
  
  signupform = new FormGroup({
      'mail' : new FormControl(null,[Validators.required,Validators.email]),
      'username' : new FormControl(null,Validators.required),
           'pw' : new FormControl(null,[Validators.required ,Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')]),
              })
  ngOnInit() {  
  }

constructor(private router: Router) {}
  goTologin() {
    this.router.navigate(['./login']);
  }
 onSubmit(){
 localStorage.setItem('User', JSON.stringify(this.signupform.value));
this.signupform.reset(); 
this.goTologin();

 }

 get vmail(){
return this.signupform.get("mail")
 }
 get vname(){
return this.signupform.get("username")
 }
  get vpw(){
return this.signupform.get("pw")
 }
 goTohome(){
  this.router.navigate(['./home']);
 }


}
