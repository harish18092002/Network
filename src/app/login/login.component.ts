import { STRING_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  tf: any;
  signupdata: any;
  logindata: any;

  loginform = new FormGroup({
    usname: new FormControl(null, Validators.required),
    pw: new FormControl(null, [
      Validators.required,
      // Validators.pattern(
      //   '^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$'
      // ),
    ]),
  });
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void { }
  goTosignup() {
    this.router.navigate(['./signup']);
  }

  goToprofile() {
    this.router.navigate(['./profile']);
  }
  goTohome() {
    this.router.navigate(['./home']);
  }

  // auth guard

  onSubmit() {
    this.authService;
    sessionStorage.setItem('User', JSON.stringify(this.loginform.value));

    this.signupdata = localStorage.getItem('User');
    this.logindata = sessionStorage.getItem('User');
    this.signupdata = JSON.parse(this.signupdata);
    this.logindata = JSON.parse(this.logindata);

    console.log('This is signupdata  ' + this.signupdata.mail);
    console.log('This is login data  ' + this.logindata.usname);
    this.loginform.reset();
    //  this.loginform = JSON.parse(this.loginform)
    //  console.log(this.loginform.controls.usname.value)

    console.log('this is auth service' + this.authService.User());

    if (
      this.signupdata.username == this.logindata.usname &&
      this.signupdata.pw == this.logindata.pw
    ) {
      this.goToprofile();


    } else {
      alert('Check Your Credentials');

    }
  }

  // for forms validators

  get vname() {
    return this.loginform.get('usname');
  }
  get vpw() {
    return this.loginform.get('pw');
  }
}
