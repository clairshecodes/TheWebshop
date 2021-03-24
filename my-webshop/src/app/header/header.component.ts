import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    collapsed = true;
    clotheName = '';
    onUpdateServerName(event: any){
        this.clotheName = (event.target as HTMLInputElement).value;

    }
}

