import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

  user: any = {name: "john", group: "billing"};

  constructor() {
  }

  getProfile(): any {
    return this.user;
  }
}
