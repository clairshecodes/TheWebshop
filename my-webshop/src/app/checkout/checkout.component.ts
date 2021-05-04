import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styles: [
  ]
})
export class CheckoutComponent implements OnInit {
  shippingCosts = this.cartService.getShippingPrices();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
