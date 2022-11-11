import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, ViewChild} from '@angular/core';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';



@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.css']
})
export class AddprofileComponent implements OnInit {

  //   separatorKeysCodes: number[] = [ENTER, COMMA];
  // fruitCtrl = new FormControl('');
  // filteredFruits: Observable<string[]>;
  // fruits: string[] = ['Lemon'];
  // allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  // @ViewChild('fruitInput')
  // fruitInput!: ElementRef<HTMLInputElement>;

  // grid = new FormControl(Validators.required);

// constructor code
// this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
//       startWith(null),
//       map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
//     );

  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  fruits: string[] = [];
  allFruits: string[] = ['Business Peoples','Idea Peoples','Entertainment Peoples','Talentes Peoples','Startup plan Peoples'];

  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;

  constructor(private router : Router) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  // add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   // Add our fruit
  //   if (value) {
  //     this.fruits.push(value);
  //   }

  //   // Clear the input value
  //   event.chipInput!.clear();

  //   this.fruitCtrl.setValue(null);
  // }

  // remove(fruit: string): void {
  //   const index = this.fruits.indexOf(fruit);

  //   if (index >= 0) {
  //     this.fruits.splice(index, 1);
  //   }
  // }

  // selected(event: MatAutocompleteSelectedEvent): void {
  //   this.fruits.push(event.option.viewValue);
  //   this.fruitInput.nativeElement.value = '';
  //   this.fruitCtrl.setValue(null);
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  // }



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
