import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  total(){
    return this.cartService.total();
  }

  constructor(private cartService: CartService, private http: HttpClient) { }

  ngOnInit() {
    this.fetchPosts();
  }
  onAdd(postData: { navn: string; kortnummer: number, gyldig: number, kontrolcire : number }) {
    // Send Http request
    this.http
      .post(
        'https://webshop-dtu-default-rtdb.firebaseio.com/checkout.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  private fetchPosts(){
    this.http.get('https://webshop-dtu-default-rtdb.firebaseio.com/checkout.json')
    .subscribe(posts => {
      console.log(posts);
    });
  }

}
