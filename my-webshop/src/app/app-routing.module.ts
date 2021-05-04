import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductComponent} from './cart/product/product.component';
import {LogInComponent} from './authentication/log-in/log-in.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {CartComponent} from './cart/cart.component';
import {MainComponent} from './main/main.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {SignUpComponent} from './authentication/sign-up/sign-up.component';


const appRoutes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'product', component: ProductComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'login', component: LogInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'authentication', component: AuthenticationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
