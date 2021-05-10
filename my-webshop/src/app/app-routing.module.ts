import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ProductComponent } from './product/product.component';
import{LoginComponent} from './authentication/login/login.component'
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { MainComponent } from './main/main.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { ConfirmationComponent } from './checkout/confirmation/confirmation.component';


const appRoutes: Routes = [
  {path: '', component: MainComponent },
  {path: 'main', component: MainComponent },
  {path: 'product', component: ProductComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'authentication', component: AuthenticationComponent},
  {path: 'shipping', component: CheckoutComponent},
  {path: 'confirmation', component: ConfirmationComponent},
  {path: 'Cart', component: CartComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
    exports: [RouterModule]

})

export class AppRoutingModule {}
