import {Component, OnInit} from '@angular/core';
import {Names} from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  myImage: string = "assets/image/sweatshirt.jpg";
  priceRangeFrom = '50kr';
  priceRangeTo = '5000kr';
  pricing = "something kr.";


  names: Names[] = [
    new Names(1,'Minus', 'This is a blouse made by vanilla', "assets/image/sweatshirt.jpg", 200, 1), new Names(2, 'Ripped shirt', 'As the title says ripped', "assets/image/co-ord.jpg", 300, 1), new Names(3, 'Jacked shirt', 'Made by famous Jack', "assets/image/whole.jpg", 400, 1), new Names(4, 'Cali', 'More like Cali flower', "assets/image/sweatshirt.jpg", 200, 1), new Names(5, 'Hello', 'Makes you want to say Hello to the world', "assets/image/sweatshirt.jpg", 300, 1),
    new Names(6, 'Shirt1', 'Just a shirt', "assets/image/co-ord.jpg", 300, 1), new Names(7, 'Shirt2', 'Just another shirt', "assets/image/whole.jpg", 200, 1)
  ];
  constructor() {
  }
  //Increasing the amount of items
  inc(i){
    //console.log(i);
    if (i.qnt !=5){
    i.qnt += 1;
    }
  }

  //Decresing the amount of items
  dec(i){
    //console.log(i);
    if (i.qnt!=1){
      i.qnt-=1;
    }
  }
  itemsCart: any = [];
  addCart(catagory){
    let cartDataNull = localStorage.getItem('localCart');
    if(cartDataNull==null){
      let storeDataGet: any =[];
      storeDataGet.push(catagory);
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));
    } else {
      var id = catagory.prodId;
      let index:number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('localcart'));
      for(let k=0; k<this.itemsCart.length; k++){
        if(parseInt(id) === parseInt(this.itemsCart[k].prodId)) {
          this.itemsCart[k].qnt = catagory.qnt;
          index = k;
          break;
        } if (index==-1){
            this.itemsCart.push(catagory);
            localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
        }
        else{
          localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
        }
      }
      localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
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
