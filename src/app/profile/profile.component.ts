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
      localStorage.removeItem('User');
        sessionStorage.removeItem('User');
  }
  goTosingleprofile(){
    this.router.navigate(['./singleprofile']);
  }

public users:{userid : any ;facebook : any;  name:  any  ; place :  any  ; image:  any ; category : any ; number : any  ; instagram :  any  ; linkedin :  any  ; description :  any  }[]=[
  {
  userid : "1",
    image: "/assets/img/arun.png",
    name: 'Harish',
    place: 'Chennai',
    category : 'Intresting People',
    facebook: "harish18",
    number: '9790909162',
    instagram : 'h_a_r_i_s_h',
    linkedin: 'https://www.linkedin.com/in/arun2599/',
    description : 'I have always been interested in web development, and I have the necessary skills required for the role. I have a good understanding of HTML, CSS, JavaScript. ' ,
  },
  {
userid  : "2",
    image: "/assets/img/arun 1.png",
    name: "Arun",
    place : 'Neyveli',
    category : 'Idea People',
    number: '1275869382',
    facebook: "Aruncopzz",
    instagram : 'h_a_r_i_s_h',
    linkedin: 'https://www.linkedin.com/in/arun2599/',
    description : 'I have always been interested in web development, and I have the necessary skills required for the role. I have a good understanding of HTML, CSS, JavaScript. ' ,
  },
  {
   userid : "3",
    image: "/assets/img/arun.png",
    name: 'Madhan',
    place: 'Chennai',
    facebook: "manmadhan",
    category : 'Intresting People',
    number: '9794574162',
    instagram : 'h_a_r_i_s_h',
    linkedin: 'https://www.linkedin.com/in/arun2599/',
    description : 'I have always been interested in web development, and I have the necessary skills required for the role. I have a good understanding of HTML, CSS, JavaScript. ' ,
  },
  {
   userid: "4",
    image: "/assets/img/arun 1.png",
    name: 'Abin',
    place: 'Chennai',
    facebook: "AbinPaul",
    category : 'Intresting People',
    number: '9885329162',
    instagram : 'h_a_r_i_s_h',
    linkedin: 'https://www.linkedin.com/in/arun2599/',
    description : 'I have always been interested in web development, and I have the necessary skills required for the role. I have a good understanding of HTML, CSS, JavaScript. ' ,
  },
  {
    userid  : "5",
    image: "/assets/img/arun.png",
    name: 'Tazeen',
    place: 'Chennai',
    facebook: "Sana Tazeen",
    category : 'Business People',
    number: '9792799162',
    instagram : 'h_a_r_i_s_h',
    linkedin: 'https://www.linkedin.com/in/arun2599/',
    description : 'I have always been interested in web development, and I have the necessary skills required for the role. I have a good understanding of HTML, CSS, JavaScript. ' ,
  },
  {
  userid  : "6",
    image: "/assets/img/arun.png",
    name: 'Sivaram',
    facebook: "SivaramSundaram",
    place: 'Chennai',
    category : 'Intresting People',
    number: '9899709162',
    instagram : 'h_a_r_i_s_h',
    linkedin: 'https://www.linkedin.com/in/arun2599/',
    description : 'I have always been interested in web development, and I have the necessary skills required for the role. I have a good understanding of HTML, CSS, JavaScript. ' ,
  },
  {
    userid  : "7",
    image: "/assets/img/arun 1.png",
    name: 'Akash',
    facebook: "Akash443",
    place: 'Chennai',
    category : 'Intresting People',
    number: '9790787362',
    instagram : 'h_a_r_i_s_h',
    linkedin: 'https://www.linkedin.com/in/arun2599/',
    description : 'I have always been interested in web development, and I have the necessary skills required for the role. I have a good understanding of HTML, CSS, JavaScript. ' ,
  },
  {
   userid : "8",
    image: "/assets/img/arun.png",
    name: 'Kumaran',
    place: 'Chennai',
    facebook: "KumaranGP",
    category : 'Intresting People',
    number: '976946349162',
    instagram : 'h_a_r_i_s_h',
    linkedin: 'https://www.linkedin.com/in/arun2599/',
    description : 'I have always been interested in web development, and I have the necessary skills required for the role. I have a good understanding of HTML, CSS, JavaScript. ' ,

  },

]; 

  

  constructor(private router: Router) { }
userdata :any;

  ngOnInit(): void { 
    this.userdata = localStorage.getItem('User');
    this.userdata = JSON.parse(this.userdata)
    
  }

  selectCurrentUser(data :any ){
    console.log('users',data)
  }
  // selectedReceiver : any ;
  // currentUser: any;
showelements : boolean = false;
showfilter :boolean = false;
// profilepage : boolean = true;
// singleprofilepage : boolean = false;

//  selectSingleUser(user :any ){
//  this.currentUser = user ; 
//   this.profilepage = false;
//   this.singleprofilepage = true;
//  }
showprofile(){
  

 console.log (this.userdata)
}
}
