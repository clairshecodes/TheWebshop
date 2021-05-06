import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  total(){
    return this.cartService.total();
  }
  
  constructor(private cartService: CartService, private http: HttpClient) { 

  }

  ngOnInit() {
    console.log("Start");
    this.fetchPosts();
    console.log("Stop");
  }
  onAdd(postData: { navn: string; kortnummer: number, gyldig: number, kontrolcifre : number }) {
    // Send Http request
    console.log(postData);
    console.log("Start");
    this.http
      .post(
        'https://webshop-dtu-default-rtdb.firebaseio.com/checkout.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
      console.log("end");
  }
 

  private fetchPosts(){
    this.http.get('https://webshop-dtu-default-rtdb.firebaseio.com/checkout.json')
    .subscribe(posts => {
      console.log(posts);
    });
  }

}
