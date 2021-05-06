import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styles: [
  ]
})
export class CheckoutComponent implements OnInit {
  //shippingCosts = this.cartService.getShippingPrices();

  constructor() { }

  ngOnInit(): void {
  }

}
