import { Component, OnInit } from '@angular/core';
import {Names} from '../product/product.model';

@Component({
  selector: 'app-item',
  
  templateUrl: './item.component.html',
  styles: [
  ]
})
export class ItemComponent implements OnInit {
  myImage:string = "assets/image/sweatshirt.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
