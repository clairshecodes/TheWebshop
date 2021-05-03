import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ProductComponent } from './cart/product/product.component';
import{LogInComponent} from './authentication/log-in/log-in.component'
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { MainComponent } from './main/main.component';
import { AuthenticationComponent } from './authentication/authentication.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/main'},
  {path: 'product', component: ProductComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'login', component: LogInComponent},
  {path: 'authentication', component: AuthenticationComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
    
})

export class AppRoutingModule {}
