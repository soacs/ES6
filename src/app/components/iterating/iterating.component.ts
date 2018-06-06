import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iterating',
  templateUrl: './iterating.component.html',
  styleUrls: ['./iterating.component.css']
})
export class IteratingComponent implements OnInit {

  oddArray = [3, 7, 11, 13];
  evenArray = [2, 4, 6, 8];
  mixArray = [1, 2, 4, 7, 8];

  constructor() { }

  ngOnInit() {
    this.foreachDemo();
    this.forinDemo();
    this.forofDemo();
  }

  foreachDemo(){
    let oddArray = [3, 7, 11, 13];
    console.log('Foreach oddArray = ');
    // no break possible
    oddArray.forEach(element=>console.log(element));
  }

  forinDemo(){
    let evenArray = [2, 4, 6, 8];
    console.log('Forin evenArray names = ');
    // iterates over names
    for(let e in evenArray) {
      console.log(e);
    }

    let person = {name: 'steve', phone: '203-867-5309', address: '5 mocking bird lane'};
    console.log('Forin person object names = ');
    for(let p in person) {
      console.log(p);
    }
  }

  forofDemo() {
    let mixArray = [1, 2, 4, 7, 8];
    console.log('Forof mixArray elements less than or equal to 7 = ');
    // can break
    for(let e of mixArray) {
      console.log('e = ' + e);
      if(e == 7) break;
    }
    console.log('Forof mixArray = ');
    for(let e of mixArray) {	console.log(e); }
  }



}
