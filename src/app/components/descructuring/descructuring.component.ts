import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-descructuring',
  templateUrl: './descructuring.component.html',
  styleUrls: ['./descructuring.component.css']
})
export class DescructuringComponent implements OnInit {

  id: number;
  description: string;
  identity: number;
  prodId: number;
  prodDescr: string;

  company1: string;
  company2: string;
  company3: string;

  company1Message: string;
  company2Message: string;
  company3Message: string;

  user1: string;
  user2: string;
  otherUsers: Array<any>;

  constructor() {}

  ngOnInit() {
    this.simpleDescructuring();
    this.arrayDescructuring();
  }

  simpleDescructuring() {
    let {id, description} = this.getItem();
    this.id = id;
    this.description = description;
    let {id: identity} = this.getItem();
    this.identity = identity;

    let {productId: prodId, productDescription: prodDescr} = this.getProduct();
    this.prodId = prodId;
    this.prodDescr = prodDescr;
  }

  getItem() {
    return {id: 23, description: 'iPhone'};
  }

  getProduct() {
    return {productId: 49, productDescription: 'ASUS Tablet'};
  }

  arrayDescructuring() {

    let [company1, company2] = ['AMAZON', 'FEDEX'];
    this.company1 = company1;
    this.company2 = company2;

    this.company1Message = `The most profitable is ${company1}`;
    this.company2Message = `The least profitable is ${company2}`;

    console.log(`company1 = ${company1}`);
    console.log(`company2 = ${company2}`);

    let [, company3] = ['IBM', 'ANGULARORANGE'];
    this.company3 = company3;
    this.company3Message = `The most colorful company in the world is ${company3}`;

    console.log(this.company3Message);

    let users =['steve', 'john', 'ann', 'mary'];
    let [user1, user2, ...otherUsers] = users;
    this.user1 = user1;
    this.user2 = user2;
    this.otherUsers = otherUsers;

  }
}
