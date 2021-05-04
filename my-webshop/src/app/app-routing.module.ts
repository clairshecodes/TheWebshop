import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Components
import {MainComponent} from './main/main.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {CartComponent} from './cart/cart.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {LogInComponent} from './authentication/log-in/log-in.component';
import {SignUpComponent} from './authentication/sign-up/sign-up.component'
const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LogInComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart', component: CartComponent},
  {path: 'authentication', component: AuthenticationComponent},
  {path: 'login', component: LogInComponent},
  {path:'signup',component:SignUpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
