import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ProductComponent } from './product/product.component';
import{LogInComponent} from './authentication/log-in/log-in.component'
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { FrontPageComponent } from './frontpage/front-page.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ConfirmationComponent } from './checkout/confirmation/confirmation.component';


const appRoutes: Routes = [
  {path: '', component: FrontPageComponent },
  {path: 'main', component: FrontPageComponent },
  {path: 'product', component: ProductComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'login', component: LogInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'authentication', component: AuthenticationComponent},
  {path: 'shipping', component: CheckoutComponent},
  {path: 'confirmation', component: ConfirmationComponent},
  {path: 'Cart', component: CartComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
    exports: [RouterModule]
    
})

export class AppRoutingModule {}
