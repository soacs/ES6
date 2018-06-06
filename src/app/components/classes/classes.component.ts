import {Component, OnInit} from '@angular/core';


class Product {
  constructor(public price) {
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}

class Guitar extends Product {
}

class Item {
  static counter: number;
}

class Person {

  income: number;

  constructor(income) {
    this.income = income;
  }

  calcBonus() {
    return this.income * .25
  }
}

class Staff {
  constructor(public income) {
    this.income = income;
  }

  calcBonus() {
    return this.income*.10;
  }
}

class Employee extends Staff {
  constructor(income, public state) {
    super(income);
    this.state = state;
  }

  calcBonus() {
    if (this.state == 'NY') {
      return this.income*.12;
    } else {
      return super.calcBonus();
    }
  }
}

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  priceOfGuitar: number;
  itemCounter: number;
  person: any;

  personIncome: number;
  personBonus: number;

  staffBonus: number;
  employeeBonus: number;

  constructor() {
  }

  ngOnInit() {
    this.createGuitar();
    this.createItem();
    this.createGetSet();
    this.createSubclass();
  }

  createGuitar() {
    let guitar = new Guitar(1500);
    let price = guitar.getPrice();
    this.priceOfGuitar = price;
    console.log(`The guitar.getPrice() of a guitar is ${price}`);
    console.log('The guitar.price is = ' + guitar.price);
    console.log('The price is = ' + price);
  }


  createItem() {
    console.log('Item counter:' );
    Item.counter = 0;
    let item1 = new Item();
    Item.counter++;
    console.log(Item.counter);
    let item2 = new Item();
    Item.counter++;
    console.log(Item.counter);
    this.itemCounter = Item.counter;
  }

  createGetSet() {
    let person = new Person(0);
    console.log('Income of person= ' + person.income);
    person.income = 50000;
    console.log('Income of person = ' + person.income);
    person.income = 100000;
    console.log(`If person income = ` + person.income + `, their tax = ${person.calcBonus()}`);
    this.personIncome = person.income;
    this.personBonus = person.calcBonus();
  }

  createSubclass() {
    let staff = new Staff(100000);
    let bonus = staff.calcBonus();
    this.staffBonus = bonus;
    console.log('staff bonus = ' + bonus);
    let employee = new Employee(100000, 'NY');
    bonus = employee.calcBonus();
    this.employeeBonus = bonus;
    console.log('employee bonus = ' + bonus);
  }

}






