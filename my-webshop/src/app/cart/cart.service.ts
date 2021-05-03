import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ICart, ICartItem, Cart, ICartTotals } from '../shared/models/cart';
import { map } from 'rxjs/operators';
import { IProduct } from '../shared/models/product';
import { IDeliveryMethod } from '../shared/models/deliveryMethod';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  [x: string]: any;
  baseUrl = environment.apiUrl;
  private CartSource = new BehaviorSubject<ICart>(null);
  cart$ = this.CartSource.asObservable();
  private cartTotalSource = new BehaviorSubject<ICartTotals>(null);
  cartTotal$ = this.cartTotalSource.asObservable();
  shipping = 0;
  cartSource: any;

  constructor(private http: HttpClient) { }

  createPaymentIntent() {
    return this.http.post(this.baseUrl + 'payments/' + this.getCurrentCartValue().id, {})
      .pipe(
        map((cart: ICart) => {
          this.cartSource.next(cart);
        })
      );
  }

  setShippingPrice(deliveryMethod: IDeliveryMethod) {
    this.shipping = deliveryMethod.price;
    const cart = this.getCurrentCartValue();
    cart.deliveryMethodId = deliveryMethod.id;
    cart.shippingPrice = deliveryMethod.price;
    this.calculateTotals();
    this.setCart(Cart);
  }

  getCart(id: string) {
    return this.http.get(this.baseUrl + 'cart?id=' + id)
      .pipe(
        map((cart: ICart) => {
          this.cartSource.next(Cart);
          this.shipping = Cart.shippingPrice;
          this.calculateTotals();
        })
      );
  }

  setcart(cart: ICart) {
    return this.http.post(this.baseUrl + 'cart', Cart).subscribe((response: ICart) => {
      this.cartSource.next(response);
      this.calculateTotals();
    }, error => {
      console.log(error);
    });
  }

  getCurrentCartValue() {
    return this.cartSource.value;
  }

  addItemToCart(item: IProduct, quantity = 1) {
    const itemToAdd: ICartItem = this.mapProductItemToCartItem(item, quantity);
    let cart = this.getCurrentCartValue();
    if (cart === null) {
      cart = this.createCart();
    }
    cart.items = this.addOrUpdateItem(cart.items, itemToAdd, quantity);
    this.setCart(cart);
  }
  setCart(cart: any) {
    throw new Error('Method not implemented.');
  }

  incrementItemQuantity(item: ICartItem) {
    const cart = this.getCurrentCartValue();
    const foundItemIndex = cart.items.findIndex(x => x.id === item.id);
    cart.items[foundItemIndex].quantity++;
    this.setCart(cart);
  }

  decrementItemQuantity(item: ICartItem) {
    const cart = this.getCurrentCartValue();
    const foundItemIndex = cart.items.findIndex(x => x.id === item.id);
    if (cart.items[foundItemIndex].quantity > 1) {
      cart.items[foundItemIndex].quantity--;
      this.setCArt(cart);
    } else {
      this.removeItemFromCart(item);
    }
  }

  removeItemFromCart(item: ICartItem) {
    const cart = this.getCurrentCartValue();
    if (cart.items.some(x => x.id === item.id)) {
      cart.items = cart.items.filter(i => i.id !== item.id);
      if (cart.items.length > 0) {
        this.setCart(cart);
      } else {
        this.deleteCart(cart);
      }
    }
  }

  deleteLocalCart(id: string) {
    this.cartSource.next(null);
    this.cartTotalSource.next(null);
    localStorage.removeItem('cart_id');
  }

  deleteCart(cart: ICart) {
    return this.http.delete(this.baseUrl + 'cart?id=' + cart.id).subscribe(() => {
      this.cartSource.next(null);
      this.cartTotalSource.next(null);
      localStorage.removeItem('cart_id');
    }, error => {
      console.log(error);
    });
  }

  private calculateTotals() {
    const cart = this.getCurrentCartValue();
    const shipping = this.shipping;
    const subtotal = cart.items.reduce((a, b) => (b.price * b.quantity) + a, 0);
    const total = subtotal + shipping;
    this.cartTotalSource.next({shipping, total, subtotal});
  }

  private addOrUpdateItem(items: ICartItem[], itemToAdd: ICartItem, quantity: number): ICartItem[] {
    const index = items.findIndex(i => i.id === itemToAdd.id);
    if (index === -1) {
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    } else {
      items[index].quantity += quantity;
    }
    return items;
  }

  private createCart(): ICart {
    const cart = new Cart();
    localStorage.setItem('cart_id', cart.id);
    return cart;
  }

  private mapProductItemToCartItem(item: IProduct, quantity: number): ICartItem {
    return {
      id: item.id,
      productName: item.name,
      price: item.price,
      pictureUrl: item.pictureUrl,
      quantity,
      brand: item.productBrand,
      type: item.productType
    };
  }
}
