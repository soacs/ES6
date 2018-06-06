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
  constructor(income) {
    this.income = income;
  }

  calcBonus() {
    return .10;
  }
}
class Employee extends Person {
  constructor(income, state) {
    super(income);
    this.state = state;
  }

  calcBonus() {
    if (state == 'NY') {
      return .12;
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
  person: Person = {};

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
    let Person = {
      income: 0, set income(inc) {
        this.income = inc;
      }, get income() {
        return this.income;
      },
      calcTax() {
        return this.income * .25
      }
    };

    Person.income = 50000;
    console.log('Income = ' + Person.income);
    Person.income = 100000;
    console.log(`If person income = ` + Person.income + `, their tax = ${Person.calcTax()}`);

  }

  createSubclass() {
    person1 = new Person(100000);
    let bonus = person1.calcBonus();
    console.log('person bonus = ' + bonus);
    person2 = new Employee(100000, 'NY');
    bonus = person2.calcBonus();
    console.log('employee bonus = ' + bonus);
  }


}






