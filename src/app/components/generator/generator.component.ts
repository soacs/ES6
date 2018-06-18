import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

  purchasePrice: number;
  presentPrice: number;
  maxPrice: number;

  constructor() {
  }

  ngOnInit() {
    let logIterator = logInfo();
    logIterator.next(); // BEGIN logInfo
    logIterator.next(); // CONTINUE PROCESSING logInfo
    logIterator.next();

    let priceIterator = getPrice(); // returns generator
    const limitPrice = 25;
    let price = 30;
    this.maxPrice = limitPrice;
    while (price > limitPrice) {
      price = priceIterator.next().value;
      console.log('**** price = ' + price);
      this.presentPrice = price;
    }
    this.purchasePrice = price;
    console.log('buying at price = ' + price);

    function* logInfo() {
      console.log('BEGIN logInfo');
      yield;
      console.log('CONTINUE PROCESSING logInfo');
      yield;
      console.log('END PROCESSING logInfo');
    }

    function* getPrice() {
      while (true) {
        yield Math.random() * 100;
      }
    }
  }
}
