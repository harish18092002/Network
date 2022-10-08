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
  goTosingleprofile(){
    this.router.navigate(['./singleprofile']);
  }

  public users:{ id : string ; name: string ; place : string ; image: string ; category : string; number : string ; instagram : string ; linkedin : string ; description : string }[]=[
    {
      id : "1",
      image: "/assets/img/arun.png",
      name: 'Harish',
      place: 'Chennai',
      category : 'Intresting People',
      number: '9790909162',
      instagram : 'h_a_r_i_s_h',
      linkedin: 'https://www.linkedin.com/in/arun2599/',
      description : 'I have always been interested in web development, and I have the necessary skills required for the role. I have a good understanding of HTML, CSS, JavaScript. ' ,
    },
    {
      id : "2",
      image: "/assets/img/arun 1.png",
      name: "Arun",
      place : 'Chennai',
      category : 'Intresting People',
      number: '9790909162',
      instagram : 'h_a_r_i_s_h',
      linkedin: 'https://www.linkedin.com/in/arun2599/',
      description : 'I have always been interested in web development, and I have the necessary skills required for the role. I have a good understanding of HTML, CSS, JavaScript. ' ,
    },
    {
      id : "3",
      image: "/assets/img/arun.png",
      name: 'Madhan',
      place: 'Chennai',
      category : 'Intresting People',
      number: '9790909162',
      instagram : 'h_a_r_i_s_h',
      linkedin: 'https://www.linkedin.com/in/arun2599/',
      description : 'I have always been interested in web development, and I have the necessary skills required for the role. I have a good understanding of HTML, CSS, JavaScript. ' ,
    },
    {
      id : "4",
      image: "/assets/img/arun 1.png",
      name: 'Abin',
      place: 'Chennai',
      category : 'Intresting People',
      number: '9790909162',
      instagram : 'h_a_r_i_s_h',
      linkedin: 'https://www.linkedin.com/in/arun2599/',
      description : 'I have always been interested in web development, and I have the necessary skills required for the role. I have a good understanding of HTML, CSS, JavaScript. ' ,
    },
    {
      id : "5",
      image: "/assets/img/arun.png",
      name: 'Tazeen',
      place: 'Chennai',
      category : 'Intresting People',
      number: '9790909162',
      instagram : 'h_a_r_i_s_h',
      linkedin: 'https://www.linkedin.com/in/arun2599/',
      description : 'I have always been interested in web development, and I have the necessary skills required for the role. I have a good understanding of HTML, CSS, JavaScript. ' ,
    },
    {
      id : "6",
      image: "/assets/img/arun.png",
      name: 'Sivar am',
      place: 'Chennai',
      category : 'Intresting People',
      number: '9790909162',
      instagram : 'h_a_r_i_s_h',
      linkedin: 'https://www.linkedin.com/in/arun2599/',
      description : 'I have always been interested in web development, and I have the necessary skills required for the role. I have a good understanding of HTML, CSS, JavaScript. ' ,
    },
    {
      id : "7",
      image: "/assets/img/arun 1.png",
      name: 'Akash',
      place: 'Chennai',
      category : 'Intresting People',
      number: '9790909162',
      instagram : 'h_a_r_i_s_h',
      linkedin: 'https://www.linkedin.com/in/arun2599/',
      description : 'I have always been interested in web development, and I have the necessary skills required for the role. I have a good understanding of HTML, CSS, JavaScript. ' ,
    },
    {
      id : "8",
      image: "/assets/img/arun.png",
      name: 'Kumaran',
      place: 'Chennai',
      category : 'Intresting People',
      number: '9790909162',
      instagram : 'h_a_r_i_s_h',
      linkedin: 'https://www.linkedin.com/in/arun2599/',
      description : 'I have always been interested in web development, and I have the necessary skills required for the role. I have a good understanding of HTML, CSS, JavaScript. ' ,
    },
  
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectCurrentUser(data :any ){
    console.log('users',data)
  }
  selectedReceiver : any ;
  currentUser: any;
showelements : boolean = false;
profilepage : boolean = true;
singleprofilepage : boolean = false;

 selectSingleUser(user :any ){
  console.log("hi",user)
  this.currentUser = user ; 
  this.profilepage = false;
  this.singleprofilepage = true;
 }
}
