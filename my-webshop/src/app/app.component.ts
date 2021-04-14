import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-webshop';
  collapsed = true;
  clothName = 'Search';
  onUpdateServerName(event: any){
      this.clothName = (event.target as HTMLInputElement).value;

  }
  
}
