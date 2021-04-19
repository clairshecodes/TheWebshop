import {Component} from '@angular/core';

import {Options} from './header/header.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JaDes Webshop';
  clothesName = 'Search';

  characters = [
    'Sweatshirt',
    'Jackets',
    'Dresses',
    'Co-Ords'
  ];
  collapsed = true;
  searchText = 'Search';

  options: Options[] = [
    new Options('Sweatshirt'), new Options('Jackets'), new Options('Skirts'), new Options('Dresses')
  ];

  onUpdateServerName(event: any) {
    this.clothesName = (event.target as HTMLInputElement).value;
  }
}
