import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ProductComponent } from './cart/product/product.component';
import{LogInComponent} from './authentication/log-in/log-in.component'

const routes: Routes = [
    {path: '', redirectTo: '/main'}
  
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
