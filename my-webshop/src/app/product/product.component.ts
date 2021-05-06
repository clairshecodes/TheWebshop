import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Product } from 'src/app/models/product.model';


import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  @Output() selectedProduct = new EventEmitter<void>();

  addToCart(product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart');
  }
  
  constructor(
    private productService: ProductService, private cartService: CartService, private route: ActivatedRoute
    ) {
    this.products = this.productService.getProduct();
  }
 
  products: Product[];

  Up(i){
    i.qnt;
  }

  //Increasing the amount of items
  inc(item) {
    //console.log(i);
    if (item.qnt !== 5) {
      item.qnt += 1;
    }
  }

  //Decresing the amount of items
  dec(item) {
    //console.log(i);
    if (item.qnt !== 1) {
      item.qnt -= 1;
    }
  }
  

  ngOnInit(): void {
  }

}
