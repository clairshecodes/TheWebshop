
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
    export class PaymentService{
    constructor(private http: HttpClient) {}
        onAdd(postData: { navn: string; kortnummer: number, gyldig: number, kontrolcifre : number }) {
        // Send Http request
        console.log(postData);
        this.http
          .post(
            'https://webshop-dtu-default-rtdb.firebaseio.com/checkout.json',
            postData
          )
          .subscribe(responseData => {
            console.log(responseData);
          });
      }
    
      fetchPosts(){
        this.http.get('https://webshop-dtu-default-rtdb.firebaseio.com/checkout.json')
        .subscribe(posts => {
          console.log(posts);
        });
      }   
}