import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['/header.component.css']
})
export class HeaderComponent implements OnInit {
  clothesName = 'Search';
  title = 'JaDes Webshop';

  characters = [
    'Sweatshirt',
    'Jackets',
    'Dresses',
    'Co-Ords'
  ];
  collapsed = true;
  searchText = 'Search';
  constructor() { }

  ngOnInit(): void {
  }

  onUpdateServerName(event: any) {
    this.clothesName = (event.target as HTMLInputElement).value;
  }

}
