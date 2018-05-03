import { Component, OnInit,OnDestroy  } from '@angular/core';
import {Router} from "@angular/router";

import { ProductRestAPIService } from '../services/productRestApi.service';
import { DataService } from "../services/data.service";

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
  private obsPackages: Observable<Package[]>

  constructor(private productService:ProductRestAPIService,private router: Router,private data: DataService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {

    this.obsPackages = this.productService.getProducts();

    this.obsPackages
    .takeUntil(this.unsubscribe) // to unsbuscribe when done
    .subscribe((sPackage:Package[]) => {
      console.log(sPackage[0].name);
    },
    error => { 
        console.log(error);
    });

  }

  buy(ID:number) {
    this.router.navigate(['/payment',{id: ID}]);
  }

   //IMPORTANT: to avoid memory leak
   OnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
} 

}
