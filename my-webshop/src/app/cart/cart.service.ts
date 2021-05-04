import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Item} from './cart.model';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Item[] = [];
  private itemsUpdated = new Subject<Item[]>();

  constructor(private http: HttpClient) {
  }

  getItems() {
    this.http.get<{ message: string, items: Item[] }>('http://localhost:3000/api/items')
      .subscribe((itemData) => {
        this.items = itemData.items;
        this.itemsUpdated.next([...this.items]);
      });
  }

  getItemUpdateListener() {
    return this.itemsUpdated.asObservable();
  }

  addItem(id: string, amount: number, price: number) {
    const item: Item = {id: null, amount: amount, price: price};
    this.items.push(item);
    this.itemsUpdated.next([...this.items]);
  }

  /*
    items = [];

    addToCart(product) {
      this.items.push(product);
    }

    /!*
    removeFromCart(product) {
      this.items.slice(product);
    } *!/

    /!*getCurrentBasketValue() {
      return this.basketSource.value;
    }*!/

    getItems() {
      return this.items;
    }

    clearCart() {
      this.items = [];
      return this.items;
    }

    updateCart(price: number, qnt: number) {
      return this.items.push(price += price * qnt);
    }

    total() {
      let total = 0;
      for (let i = 0; i < this.items.length; i++) {
        total += this.items[i].price * this.items[i].qnt;
      }
      console.log('Total in cart:', total);
      //return total.toFixed(2);
      return total;
    }

    removeFromCart(item) {
      console.log('Removing Item:', item);
      if (item.qnt === 1) {
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].prodId === item.prodId) {
            this.items.splice(item, 1);
            console.log('This element is deleted:', item);
            return;
          }
        }
      } else {
        item.qnt--;
      }
    }

    constructor(private http: HttpClient) {
    }*/
}
