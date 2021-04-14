import {Component, OnInit} from '@angular/core';
import {Product} from './product.model';
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
  products: Product[] = [

    new Product('Sweatshirt', 'So this is a warm sweatshirt and good at winter'
      , 'https://www.kids-world.dk/images/417px/JX179.jpg'), 
      new Product('Sweatshirty', 'So this is a warm sweatshirt and good at winter'
      , 'https://www.kids-world.dk/images/417px/JX179.jpg'), 
      new Product('Sweatshirty', 'So this is a warm sweatshirt and good at winter'
      , 'https://www.kids-world.dk/images/417px/JX179.jpg'),
      new Product('Sweatshirt', 'So this is a warm sweatshirt and good at winter'
      , 'https://www.kids-world.dk/images/417px/JX179.jpg')

  ];

  names: Names[] = [
    new Names('J', 'James', 'Jared')

  ];

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
