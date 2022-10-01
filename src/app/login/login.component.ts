import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
}
