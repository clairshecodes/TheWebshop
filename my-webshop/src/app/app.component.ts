import {Component} from '@angular/core';

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


  onUpdateServerName(event: any) {
    this.clothesName = (event.target as HTMLInputElement).value;
  }
}
