import { E } from '@angular/cdk/keycodes';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

 
@Component({
  selector: 'app-singleprofile',
  templateUrl: './singleprofile.component.html',
  styleUrls: ['./singleprofile.component.css']
})
export class SingleprofileComponent implements OnInit {
  // @Input ()receiver : any ;

  constructor(private router: Router ,private route: ActivatedRoute) { };

  id : any;  // this is param data
getid:any;   //this is the particular profile data after filtering with param
userdata :any;  // this is profile username mail data

ngOnInit(): void {
 this.oninit();

  // profile data 

     this.userdata = localStorage.getItem('User');
    this.userdata = JSON.parse(this.userdata)

    }


    oninit(){
         this.route.paramMap.subscribe((params: ParamMap) => {
      if(params.get('id') !== null){
          this.id =  params.get('id');

       
      }});

  this.getid = this.users.find((user)=>user.userid === this.id)
  // this.currentUser: boolean = false;
    }
 
  //   idvalue:any;
  // pid:any;

//   index :any;
// previousprofile(){
// //  this.idvalue=this.id;
// //   for(this.idvalue;this.idvalue=0;this.idvalue--){
// //      console.log("this is id value" + this.idvalue)
// //     console.log("this is id " + this.id)
// //     this.getid = this.users.find((user)=>user.userid === this.idvalue)
// // this.idvalue--;
// //   }

// const curruser = this.index;

//  const i = this.users.findIndex(function (el) { 
//   return el ==  curruser
// })
// console.log(i)
// }

  
  
goTohome(){
  this.router.navigate(['./home']);
}
goToaddprofile(){
  this.router.navigate(['./addprofile']);
}
goToprofile(){

  this.router.navigate(['./profile']);
 
}

showelements : boolean = false;



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
    facebook: "Sivaram20",
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


currentuser : any;
paramdataid:any;

  //  next() {
    
  // this.paramdataid=this.getid.userid

  // // let index = this.users.findIndex(function(ele){
  // // ele === paramdataid;
  // // return ele  ;
  // // })
  // // console.log("This is index "+index)

  // for ( this.paramdataid; this.paramdataid = 8 ; this.paramdataid++){
  //     this.paramdataid=this.getid.userid
  //   this.currentuser =JSON.stringify(this.users[this.paramdataid]);
  // // let curr = this. currentuser;
  // console.log("This param data id is "+ this.paramdataid);  
  // return this.paramdataid
  // }
  // console.log("This is current user "+this.currentuser)
        
//   //   }


// currentUser =this.users[1];

//     // setUser(user) {
//     //     this.currentUser = user;
//     // }

//     prev() {
//       // this.getid  =false;
//         if (this.currentUser !== this.users[0]) {
//             const currUser = this.getid;
//             const i = this.users.findIndex(function (el) {
//                 return el === currUser;
//             });
//             this.currentUser = this.users[i - 1];
             
//         }
//       console.log(this.currentUser)
//     }

//     next() {
//         if (this.currentUser !== this.users[this.users.length - 1]) {
//             const currUser = this.currentUser;
//             const i = this.users.findIndex(function (el) {
//                 return el === currUser;
//             });
//             this.currentUser = this.users[i + 1];
            
//         }
//        console.log(this.currentUser)
//     }

currentUser =this.users[1];


    setUser(user) {
        this.currentUser = user;
    }

    prev() {
        if (this.currentUser !== this.users[0]) {
            const currUser = this.currentUser;
            const i = this.users.findIndex(function (el) {
                return el === currUser;
            });
            this.currentUser = this.users[i - 1];
             
        }
      console.log(this.currentUser)
      this.currentUser = this.getid;
      
    }

    next() {
        if (this.currentUser !== this.users[this.users.length - 1]) {
            const currUser = this.currentUser;
            const i = this.users.findIndex(function (el) {
                return el === currUser;
            });
            this.currentUser = this.users[i + 1];
             
        }
       console.log(this.currentUser)
    }


}
