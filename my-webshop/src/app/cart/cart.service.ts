import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'





@Injectable({
    providedIn: 'root'
  })
  export class CartService {
    //private basketSource = new BehaviorSubject<IBasket>(null);
    //basket$ = this.basketSource.asObservable();
    items = [];

   /* getItems() {
      return this.basketSource;
    }

    addItemToBasket(item: Names) {
      const itemToAdd: IBasketItem = this.mapProductItemToBasketItem(item, quantity);
      const basket = this.getCurrentBasketValue() ?? this.createBasket();
      basket.items = this.addOrUpdateItem(basket.items, itemToAdd, quantity);
      this.setBasket(basket);
    }
    getCurrentBasketValue() {
      return this.basketSource.value;
    }  
    private calculateTotals() {
      const basket = this.getCurrentBasketValue();
      //const shipping = this.shipping;
      const subtotal = basket.items.reduce((a, b) => (b.price * b.quantity) + a, 0);
      //const total = subtotal + shipping;
      //this.basketTotalSource.next({shipping, total, subtotal});
    }
    */

      addToCart(product) {
        this.items.push(product);
      }

      /*
      removeFromCart(product) {
        this.items.slice(product);
      } */

      /*getCurrentBasketValue() {
        return this.basketSource.value;
      }*/    
    
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
    constructor(private http: HttpClient) {}
  }
