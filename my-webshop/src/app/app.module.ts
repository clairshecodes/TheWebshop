import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { LogInComponent } from './authentication/log-in/log-in.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './cart/product/product.component';
import { AddCartComponent } from './cart/add-cart/add-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './checkout/payment/payment.component';
import { ConfirmationComponent } from './checkout/confirmation/confirmation.component';
import {Routes, RouterModule} from "@angular/router";
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { ItemComponent } from './cart/item/item.component';
import {FilterPipe} from './filter.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const appRoutes: Routes = [
  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart', component: CartComponent},
  {path: 'main', component: MainComponent},
  {path: 'authentication', component: AuthenticationComponent},
  {path: 'main', component: MainComponent},
  {path: 'login', component: LogInComponent},
  {path: 'product', component: ProductComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    SignUpComponent,
    LogInComponent,
    CartComponent,
    ProductComponent,
    AddCartComponent,
    CheckoutComponent,
    PaymentComponent,
    ConfirmationComponent,
    MainComponent,
    ItemComponent,
    FilterPipe
  ],
  imports: [
    //Angular material
  
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
