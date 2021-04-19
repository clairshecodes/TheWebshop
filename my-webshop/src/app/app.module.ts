import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HeaderComponent} from './header/header.component'
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
import {CatCreateComponent} from './category/category-create/category-create.component';

import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';

import{HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent,
    SignUpComponent,
    LogInComponent,
    CartComponent,
    ProductComponent,
    AddCartComponent,
    CheckoutComponent,
    PaymentComponent,
    ConfirmationComponent,
    CatCreateComponent
  ],
  imports: [
    
    FormsModule,
    BrowserAnimationsModule,
    
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,

    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
