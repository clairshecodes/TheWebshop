import { Component, OnInit } from '@angular/core';


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
