import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-literals',
  templateUrl: './literals.component.html',
  styleUrls: ['./literals.component.css']
})
export class LiteralsComponent implements OnInit {

  angularorangeCompanyName: string;
  soacsCompanyName: string;

  welcomeAngularOrange: string;
  welcomeSOACSOrange: string;

  stringParts: Array<string>;
  firstPrice: string;
  secondPrice: string;
  totalCostResult: string;

  multiLineComment: string;

  constructor() {
    this.initialize();
    this.welcomeAngularOrange = `Welcome to ${this.angularorangeCompanyName}`;
    this.welcomeSOACSOrange = `Welcome to ${this.getCompanyName()}`;
    this.setMultiLine();
  }

  ngOnInit() {
  }

  initialize() {
    this.angularorangeCompanyName = 'AngularOrange.io';
    console.log(`angularorangeCompanyName is set to: ${this.angularorangeCompanyName}`);
    this.soacsCompanyName = 'SoaConsultingServices.com';
    console.log(`soacsCompanyName is set to: ${this.soacsCompanyName}`);
  }

  getCompanyName() {
    return this.soacsCompanyName;
  }

  setMultiLine() {
    this.multiLineComment = `AngularOrange.io is a training site 
                   that helps developers build robust applications for
                   the commercial industry.`;

    console.log('Multiline comment is = ' + this.multiLineComment);
    console.log('Eating the line breaks with next string.');
    console.log(this.printLongLine('continues'));
    console.log(this.printAnotherLongLine());
    this.taggedTemplate();

  }

  printLongLine = val => {
    const singleLineText = `a very long string that just ${val}${''
      } and ${val} and ${val}${''
      } and ${val}`;

    return singleLineText;
  }

  printAnotherLongLine = () => {
    const anotherSingleLineText = `AngularOrange.io is a training site${''
      } that helps developers build robust applications for${''
      } the commercial industry.`;
    return anotherSingleLineText;
  }

  taggedTemplate() {
    let firstPrice = 10.00;
    let secondPrice = 9.59;
    this.totalCostResult = this.totalCost`Your item prices are ${firstPrice} ${secondPrice}.`;
    console.log('Tagged Template is: ' + this.totalCostResult);
  }

  totalCost(stringParts, firstPrice, secondPrice) {
    this.stringParts = stringParts;
    this.firstPrice = firstPrice;
    this.secondPrice = secondPrice;
    let totalCost = firstPrice + secondPrice;
    let result = `${stringParts[0]} $${firstPrice} and $${secondPrice}${stringParts[2]} Thus, your total price is $${totalCost}.`;

    return result;
  }

}
