import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {

  totalIncome: number = 0;
  averageIncome: number = 0;
  peteIncome: number = 113;
  johnIncome: number = 156;
  joeIncome: number = 67;


  constructor() {

  }

  ngOnInit() {
    this.restOps();
  }

  restOps() {
    this.averageIncome = this.calcAverageIncome('Suffolk', 'Pete', 'John', 'Joe');
  }


  calcAverageIncome(county, ...people) {
    let numberOfPeople = people.length;
    let income = 0, averageIncome = 0, totalIncome = 0;
    people.forEach(function (person) {
      let people = {
        'Pete': 113,
        'John': 156,
        'Joe': 67,
        'default': 0
      };
      income = people[person] || people['default'];
      totalIncome = totalIncome + income;
    });
    this.totalIncome = totalIncome;
    averageIncome = totalIncome / numberOfPeople;
    return averageIncome;
  }


}
