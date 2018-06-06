import { Component, OnInit } from '@angular/core';


class Product {
  constructor(public price){
    this.price = price;
  }
  getPrice() { return this.price; }
}

class Guitar extends Product {
}

class Item {
  static counter: number;
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

  createGetSet(){
    let Person = { income:0,
      set income(inc){this.income=inc;},
      get income() {return this.income;}
    };

    Person.income = 50000;
    console.log('Income = ' + Person.income);

  }

}






