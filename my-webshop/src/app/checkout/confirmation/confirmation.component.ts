import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styles: [
  ]
})
export class ConfirmationComponent implements OnInit {

  constructor(private cartService: CartService) { }
  total(){
    return this.cartService.total();
  }
  items = this.cartService.getItems();


  ngOnInit(): void {
  }

}
