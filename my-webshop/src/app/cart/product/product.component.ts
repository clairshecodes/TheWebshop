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
  @Output() selectedProduct = new EventEmitter<Names>();
  names: Names[];

  
  /*addToCart(product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart');
  }
*/


  /*@Output() productWasSelected = new EventEmitter<Names>();

  addToCart(){
    this.selectedProduct.emit();

  }

  onAddToCart(names: Names){

  }
*/

  priceRangeFrom = '50kr';
  priceRangeTo = '5000kr';
  pricing = "something kr.";

  onProductAdded(product: Names){ 
    this.names.push(product);
    window.alert('Your product has been added to the cart');
  }

  constructor(private cartService: CartService, private route: ActivatedRoute
    ) {
  }

  //Increasing the amount of items
  inc(i) {
    //console.log(i);
    if (i.qnt !== 5) {
      i.qnt += 1;
    }
  }

  //Decresing the amount of items
  dec(i) {
    //console.log(i);
    if (i.qnt !== 1) {
      i.qnt -= 1;
    }
  }
  
  onAddCart(names:Names){
    console.log(names);
  }
 
  
  ngOnInit() {
    this.names = this.cartService.getProducts();
  }

  onProductSelected (name: Names){
    this.selectedProduct.emit(name);
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
