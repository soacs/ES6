import {Component, OnInit} from '@angular/core';

class Person {
  name: string;
  weight: number;

  constructor(name: string, weight: number) {
    this.name = name;
    this.weight = weight;
  }
}

@Component({
  selector: 'app-spread',
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.css']
})
export class SpreadComponent implements OnInit {

  p1: Person;
  p2: Person;
  p3: Person;

  people: Array<Person>;

  averageWeight: number;
  totalWeight: number;

  constructor() {
    this.p1 = new Person('Jack', 153);
    this.p2 = new Person('Jane', 233);
    this.p3 = new Person('Sue', 198);
    this.people = [this.p1, this.p2, this.p3];
  }

  ngOnInit() {
    this.spreadOps();
  }

  spreadOps() {
    let mypeople = this.people;
    this.averageWeight = this.weight('average', ...mypeople);
    this.totalWeight = this.weight('total', ...mypeople);
  }


  weight(category?, person1?, person2?, person3?) {
    let average = 0, total=0;
    let result = 0;
    if (category == 'average') {
      average = (person1.weight + person2.weight
        + person3.weight) / 3;
      result = average;
    } else {
      total = person1.weight + person2.weight
        + person3.weight;
      result = total;
    }
      return result;
    }
}


