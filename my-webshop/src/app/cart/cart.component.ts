import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {CartService} from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['/cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  
  total(){
    return this.cartService.total();
  }

  removeFromCart(product){
    this.cartService.removeFromCart(product);
    window.alert('Item has been removed');
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
