import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {
  myCoOrd:string = "assets/image/co-ord.jpg";
  myWhole:string = "assets/image/whole.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
