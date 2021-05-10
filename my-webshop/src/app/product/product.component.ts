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
  products: Product[];
  
  addToCart(product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart');
  }
  inc(product){
    this.productService.inc(product);
  }
  dec(product){
    this.productService.dec(product);
  }
  
  constructor(
    private productService: ProductService, private cartService: CartService, private route: ActivatedRoute
    ) {
    this.products = this.productService.getProduct();
  }
 
  

  

  ngOnInit(): void {
  }

}
