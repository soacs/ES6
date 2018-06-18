import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.css']
})
export class ArrowComponent implements OnInit {

  movie: string;
  movieUpper: string;
  quantityArray: Array<number>;
  quantityArrayReduced: number;
  quantityArrayEven: Array<number>;
  item:string;
  itemPrice:number;

  constructor() {
    this.showArrow();
    this.showArrowExpression();
    this.showThisArrow()
  }

  ngOnInit() {
  }

  showArrow() {
    let getMovie = () => 'alien convenant';
    console.log(getMovie());
    let getUpperCaseMovie = () => {
      let movie = 'alien convenant'.toUpperCase();
      return movie;
    };
    console.log(getUpperCaseMovie());

    this.movie = getMovie();
    this.movieUpper = getUpperCaseMovie();
  }


  showArrowExpression() {
    let quantityArray = [2, 4, 6, 8, 11];
    this.quantityArray = quantityArray;
    this.quantityArrayEven = quantityArray.filter(value => value % 2 === 0);
    this.quantityArrayReduced = quantityArray.reduce((a, b) => a + b);
    console.log('quantityArray = ' + this.quantityArray);
    console.log('The sum of the array elements = ' + this.quantityArrayReduced);
    console.log('even numbers of the elements = ' + this.quantityArrayEven);
  }

  priceQuote(item) {
    this.item = item;
    setInterval(() => {
        this.itemPrice = 100.00*Math.random();
        console.log('the price for item ' + this.item + ' is ' + this.itemPrice);
    }, 5000);

   // this.itemPrice = 0;
  }

  showThisArrow() {
    this.priceQuote('Necklace');
  }


}
