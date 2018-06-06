
import { NgModule, Injectable } from '@angular/core';

let user:any  = {name: "steve", group: "sales"};

@Injectable()
export class UserService {
  constructor() {}
  getProfile(): any { return user;}
}

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [UserService],
  bootstrap: []
})
export class UserModule { }
