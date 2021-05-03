import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Names } from './product.model';
import {ProductService} from './product.service';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';


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
    this.names = this.productService.getProduct();
  }
 
  myImage: string = "assets/image/sweatshirt.jpg";
  priceRangeFrom = '50kr';
  priceRangeTo = '5000kr';
  pricing = "something kr.";
  names: Names[];

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

  onUpdatePriceFrom(event: any) {
    this.priceRangeFrom = (event.target as HTMLInputElement).value;
  }

  onUpdatePriceTo(event: any) {
    this.priceRangeTo = (event.target as HTMLInputElement).value;
  }

  onUpdatePricing(event: any) {
    this.pricing = (event.target as HTMLInputElement).value;
  }
}
