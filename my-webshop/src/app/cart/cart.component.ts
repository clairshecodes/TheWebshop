import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  //Total price
  total(){
    return this.cartService.total();
  }

  //Increments item in cart
  incrementInCart(product){
    this.cartService.incrementInCart(product);
  }

  //remove item from cart
  removeFromCart(product){
    this.cartService.removeFromCart(product);
    window.alert('Item has been removed');
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
