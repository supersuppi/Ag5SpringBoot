import { Component, OnInit,OnDestroy  } from '@angular/core';
import { ProductRestAPIService } from '../services/productRestApi.service';

import "rxjs/add/operator/takeUntil";
import { Subject } from "rxjs/Subject";
import { Observable } from 'rxjs/Observable';

import { Package } from '../models/package';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductRestAPIService]
})
export class ProductComponent implements OnInit {

  private unsubscribe: Subject<void> = new Subject();
  private observablePackages: Observable<Package[]>

  constructor(private productService:ProductRestAPIService) { }

  ngOnInit() {
  }

  getProducts() {

    this.observablePackages = this.productService.getProducts();

    this.observablePackages
    .takeUntil(this.unsubscribe) // to unsbuscribe when done
    .subscribe((sPackage:Package[]) =>
    error => { 
        console.log(error);
    });
  }

   //IMPORTANT: to avoid memory leak
   OnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
} 

}
