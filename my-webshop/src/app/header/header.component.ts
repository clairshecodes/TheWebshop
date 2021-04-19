import {Component} from '@angular/core';
import {Options} from './header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;
  clothesName = 'Search';

  onUpdateServerName(event: any) {
    this.clothesName = (event.target as HTMLInputElement).value;
  }

  options: Options[] = [
    new Options('Sweatshirt'), new Options('Jackets'), new Options('Skirts'), new Options('Dresses')
  ];
}

