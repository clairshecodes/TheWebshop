import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']

})
export class HeaderComponent{
    collapsed = true;
    clothesName = 'Search';
    onUpdateServerName(event: any){
        this.clothesName = (event.target as HTMLInputElement).value;

    }
}

