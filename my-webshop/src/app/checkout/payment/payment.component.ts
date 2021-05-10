import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
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
  
  constructor(private cartService: CartService, private http: HttpClient, private paymentService: PaymentService) { 

  }
  ngOnInit() {
    console.log("Start");
    this.paymentService.fetchPosts();
    console.log("Stop");
  }
 
  onAdd(postData){
    this.paymentService.onAdd(postData);
  }
  fetchPosts(){
    this.paymentService.fetchPosts();
  }
}
