import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { RestAPIService } from '../services/restAPI.service';
import { ToastNotificationService } from '../services/toast-notification.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  providers: [RestAPIService,ToastNotificationService]
})
export class PaymentComponent implements OnInit {
  private model: any = {};
  private URL:String = 'http://localhost:8080/ng5server/payment/stripe';
  private productID:String;
  
  constructor(private route: ActivatedRoute,private restAPIService:RestAPIService,) {
    route.paramMap.subscribe(
      params => this.productID = params.get('id')
      );
  }

  ngOnInit() {
  }

  chargeCreditCard(){
  (<any>window).Stripe.card.createToken({
    number: this.model.cardNumber,
    exp_month: this.model.expMonth,
    exp_year: this.model.expYear,
    cvc: this.model.cvc
  }, (status: number, response: any) => {
    if (status === 200) {
      let token = response.id;
      this.chargeCard(token);
    } else {
      console.log(response.error.message);
    }
  });
  }

  private chargeCard(token: string) {
    console.log(this.productID);
    console.log(token);
   //this.restAPIService.stripeCharge()
   
  }

}
