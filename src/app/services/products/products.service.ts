import {Injectable} from '@angular/core';

@Injectable()
export class ProductsService {

  products: Array<any> = [{name: "iphone", price: "$499"}, {name: "samsung", price: "$399"}];

  constructor() {
  }

  getProducts(): Array<any> {
    return this.products;
  }
}
