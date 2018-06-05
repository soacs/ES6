import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-scope',
  templateUrl: './scope.component.html',
  styleUrls: ['./scope.component.css']
})
export class ScopeComponent implements OnInit {

  n: number;
  name = 'Jane';
  nonconst: number;

  constructor() {
    this.showValue();
    this.showBlock();
    this.showConstants();
  }

  ngOnInit() {
  }

  showValue() {
    // var i = 0 --> hoisted
    // let i = 0 --> scope is for loop.
    for (var i = 0; i < 5; i++) {
    }
    console.log('i = ' + i);
    this.n = i;
  }

  showBlock() {
    let name = 'Steve';

    if (true) {
      let name = 'john';
      console.log('inside block name is ' + name);
    }

    console.log('global scope name is ' + name);
    console.log('class scope name is ' + this.name);
  }

  showConstants() {
    // const will produce an error
    let number = 42;

    try {
      number = 99;
    } catch (err) {
      console.log(err);
    }
    console.log(number);
    this.nonconst = number;

  }
}
