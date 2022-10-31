import { STRING_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
loginform! : FormGroup ;
 signupdata :any;
 logindata :any ;

  constructor(private router: Router) { }

  ngOnInit(): void {
 this.loginform = new FormGroup({
      'usname' : new FormControl(null),
           'pw' : new FormControl(null),
    });

  }
  goTosignup() {
    this.router.navigate(['./signup']);
  }

  goToprofile() {  

    this.router.navigate(['./profile']);
  }
goTohome(){
  this.router.navigate(['./home']);
}

onSubmit(){
  sessionStorage.setItem('User', JSON.stringify(this.loginform.value));

   this.signupdata = localStorage.getItem('User');
   this.logindata = sessionStorage.getItem("User");
   this.signupdata = JSON.parse(this.signupdata);
   this.logindata = JSON.parse(this.logindata)

   console.log("This is signupdata  " + this.signupdata.mail)
   console.log("This is login data  " + this.logindata.usname)
   this.loginform.reset();
  //  this.loginform = JSON.parse(this.loginform)
  //  console.log(this.loginform.controls.usname.value)

  if(this.signupdata.username == this.logindata.usname && this.signupdata.pw == this.logindata.pw){
    this.goToprofile();
  }
  else{
    alert("Check Your Credentials")
  }


    
}




}


