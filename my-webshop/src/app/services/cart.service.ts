import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class CartService {
    
    items = [];

      addToCart(product) {
        this.items.push(product);
      } 
    
      getItems() {
        return this.items;
      }

      total(){
        let total = 0;
        for (let i=0; i<this.items.length; i++){
          total += this.items[i].price * this.items[i].qnt;
        }
        return total;
      } 
    
      removeFromCart(item){
        console.log('Removing Item:', item);
          for(let i = 0; i<this.items.length; i++){
            if(this.items[i].prodId===item.prodId){
              this.items.splice(item, 1);
              console.log('This element is deleted:', item);
              return
            }
          }
      }
      decrementInCart(item){
        console.log('decrement item', item);
        if (item.qnt !== 1 ){
          item.qnt -= 1;
        }
      }
      incrementInCart(item){
        console.log('increment item', item);
        if (item.qnt !== 5 ){
          item.qnt += 1;
        }
      }
     
    constructor() {}
  }
