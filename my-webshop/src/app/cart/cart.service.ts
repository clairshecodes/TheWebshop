import { Injectable } from '@angular/core';
import { Names } from './product/product.model';


@Injectable({
    providedIn: 'root'
  })
  export class CartService {
    items = [Names];

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

    constructor() {}

    }
