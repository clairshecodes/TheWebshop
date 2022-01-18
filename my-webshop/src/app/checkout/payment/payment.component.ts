import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { PaymentService } from 'src/app/services/payment.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  total(){
    return this.cartService.total();
  }
  
  constructor(private cartService: CartService,  private paymentService: PaymentService) { 

  }
  ngOnInit() {
    this.paymentService.fetchPosts();
  }
 
  onAdd(postData){
    this.paymentService.onAdd(postData);
  }
  fetchPosts(){
    this.paymentService.fetchPosts();
  }
}
