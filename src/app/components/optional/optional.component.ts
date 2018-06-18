import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-optional',
  templateUrl: './optional.component.html',
  styleUrls: ['./optional.component.css']
})
export class OptionalComponent implements OnInit {

  costWithSpecificTax: string;
  costWithOptionalTax: string;
  costWithDefaultTax: string;

  constructor() {
  }

  ngOnInit() {

    this.costWithSpecificTax = this.calcCost(100.00, .09);
    this.costWithOptionalTax = this.calcCost(100.00);
    this.costWithDefaultTax = this.calcDefaultTaxCost(100.00);

    console.log('costWithSpecificTax = ' + this.costWithSpecificTax);
    console.log('costWithOptionalTax = ' + this.costWithOptionalTax);
    console.log('costWithDefaultTax = ' + this.costWithDefaultTax);

  }

  calcCost(price, tax=.06) {
  let totalCost = price + price*tax;
  return totalCost;
}

 // function with default value
  calcDefaultTaxCost(price, tax = this.getTaxRate(price)) {

  let totalCost = price + price*tax;
  return totalCost;
}

  getTaxRate(price) {
    if(price<99.00){
      return .04;
    } else {
      return .08;
    }
  }

}
