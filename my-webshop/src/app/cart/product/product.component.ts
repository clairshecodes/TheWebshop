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
    new Names('Minus', 'This is a blouse made by vanilla', "assets/image/sweatshirt.jpg"), new Names('Ripped shirt', 'As the title says ripped', "assets/image/co-ord.jpg"), new Names('Jacked shirt', 'Made by famous Jack', "assets/image/whole.jpg"), new Names('Cali', 'More like Cali flower', "assets/image/sweatshirt.jpg"), new Names('Hello', 'Makes you want to say Hello to the world', "assets/image/sweatshirt.jpg"),
    new Names('Shirt1', 'Just a shirt', "assets/image/co-ord.jpg"), new Names('Shirt2', 'Just another shirt', "assets/image/whole.jpg")
  ];

  /*names: Names[] = [
    new Names('James'), new Names('Ripped shirt'), new Names('Jacked shirt'), new Names('Cali'), new Names('hello'),
    new Names('Shirt1'), new Names('Shirt2')
  ];*/


  constructor() {
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
