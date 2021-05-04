import {Component} from '@angular/core';


// We pass JS object to this component in order to configure this component.
// Selector is app-header cause I want to ensure that I have a unique selector. And I dont override an exixting element.
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}

