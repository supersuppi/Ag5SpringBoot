import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Order } from '../models/order';

@Injectable()
export class DataService {

  private orderSub = new BehaviorSubject<Order>(null);
  order = this.orderSub.asObservable();

  constructor() { }

  updateOrder(order: Order) {
    this.orderSub.next(order);
  }

}