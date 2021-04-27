import { Component, OnInit } from '@angular/core';
import {CartService} from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['/cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  /*
  updateTotal(updatePrice, updateQuant){
    this.productService.updateTotal(updatePrice, updateQuant);
  } */

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
