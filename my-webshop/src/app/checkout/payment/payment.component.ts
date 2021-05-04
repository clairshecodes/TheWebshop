import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  total(){
    return this.cartService.total();
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
