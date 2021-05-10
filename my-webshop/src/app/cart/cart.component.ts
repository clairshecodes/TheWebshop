import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import {CartService} from '../services/cart.service';
=======
import { Observable } from 'rxjs';
import { IBasket, IBasketTotals } from './cart.model';
import {CartService} from './cart.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['/cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
<<<<<<< Updated upstream
  
  //Total price
=======
  basket$: Observable<IBasket>;
  basketTotals$: Observable<IBasketTotals>;
  
>>>>>>> Stashed changes
  total(){
    return this.cartService.total();
  }

<<<<<<< Updated upstream
  //Increments item in cart
  incrementInCart(product){
    this.cartService.incrementInCart(product);
  }

  //remove item from cart
  removeFromCart(product){
    this.cartService.removeFromCart(product);
    window.alert('Product removed from cart');
  }
  decrementInCart(product){
    this.cartService.decrementInCart(product);

=======
  removeFromCart(product){
    this.cartService.removeFromCart(product);
    window.alert('Item has been removed');
>>>>>>> Stashed changes
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
