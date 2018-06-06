import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products/products.service';
import {UserService} from '../../services/users/users.service';
//import { UserService} from '../modules/user.module';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  products: Array<any>;
  user: any;

  constructor(productsService: ProductsService, userService: UserService) {
    this.products = productsService.getProducts();
    this.user = userService.getProfile();
  }

  ngOnInit() {
  }

}
