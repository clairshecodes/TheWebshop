import { Component, EventEmitter, OnInit } from '@angular/core';
import {CartService} from './cart.service';
import { ProductService } from './product/product.service';
import {Names} from './product/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['/cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit {
  names: Names[];

  /*
  updateTotal(updatePrice, updateQuant){
    this.productService.updateTotal(updatePrice, updateQuant);
  } */

  constructor(private cartService: CartService) { }

  ngOnInit(): void {this.cartService.getProduct();
    
    
    /*this.cartService.productChanged.subscribe(
      names: Names[]) => {
        this.names = names;
      }
    )
    this.names = this.
    this.names = this.cartService.getItems(); */
  } 
}
