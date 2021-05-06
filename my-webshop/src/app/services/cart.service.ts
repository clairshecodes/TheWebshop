import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'

@Injectable({
    providedIn: 'root'
  })
  export class CartService {
    //private basketSource = new BehaviorSubject<IBasket>(null);
    //basket$ = this.basketSource.asObservable();
    items = [];

    /*
    getShippingPrices(){
      return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
    }*/ 
      addToCart(product) {
        this.items.push(product);
      } 
    
      getItems() {
        return this.items;
      }
    
      clearCart() {
        this.items = [];
        return this.items;
      }
      
      updateCart(price:number, qnt:number){
        return this.items.push(price += price*qnt);
      }

      total(){
        let total = 0;
        for (let i=0; i<this.items.length; i++){
          total += this.items[i].price * this.items[i].qnt;
        }
        console.log('Total in cart:', total);
        //return total.toFixed(2);
        return total;
      } 

      removeFromCart(item){
        console.log('Removing Item:', item);
        if (item.qnt ===1){
          for(let i = 0; i<this.items.length; i++){
            if(this.items[i].prodId===item.prodId){
              this.items.splice(item, 1);
              console.log('This element is deleted:', item);
              return
            }
          }
        } else {
          item.qnt--;
        }
      }

      incrementInCart(item){
        console.log('increment item', item);
        if (item.qnt !== 5 ){
          item.qnt += 1;
        }
      }
    constructor(private http: HttpClient) {}
  }
