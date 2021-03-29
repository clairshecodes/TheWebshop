import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  myImage:string = "assets/image/sweatshirt.jpg";
  priceRangeFrom = '50kr';
  priceRangeTo = '5000kr';
  pricing = "something kr.";
  constructor() { }
  

  ngOnInit(): void {
  }
  onUpdatePriceFrom(event: any){
    this.priceRangeFrom = (event.target as HTMLInputElement).value;
}
onUpdatePriceTo(event: any){
  this.priceRangeTo = (event.target as HTMLInputElement).value;
}
onUpdatePricing(event: any){
  this.pricing = (event.target as HTMLInputElement).value;

}
}
