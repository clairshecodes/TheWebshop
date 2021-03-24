import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent implements OnInit {
  priceRangeFrom = '50kr';
  priceRangeTo = '5000kr';
  constructor() { }

  ngOnInit(): void {
  }
  onUpdatePriceFrom(event: any){
    this.priceRangeFrom = (event.target as HTMLInputElement).value;
}
onUpdatePriceTo(event: any){
  this.priceRangeTo = (event.target as HTMLInputElement).value;
}

}
