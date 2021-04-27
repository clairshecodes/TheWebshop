import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {HeaderComponent} from './header/header.component'
import {AppComponent} from './app.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {SignUpComponent} from './authentication/sign-up/sign-up.component';
import {LogInComponent} from './authentication/log-in/log-in.component';
import {CartComponent} from './cart/cart.component';
import {ProductComponent} from './cart/product/product.component';
import {AddCartComponent} from './cart/add-cart/add-cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {PaymentComponent} from './checkout/payment/payment.component';
import {ConfirmationComponent} from './checkout/confirmation/confirmation.component';
import {MainComponent} from './main/main.component';
import {ItemComponent} from './cart/item/item.component';
import {FilterPipe} from './filter.pipe';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

    //Angular material

import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';

const appRoutes: Routes = [
  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart', component: CartComponent},
  {path: 'authentication', component: AuthenticationComponent},
  {path: 'main', component: MainComponent},
  {path: 'login', component: LogInComponent}

];


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
    MainComponent,
    ItemComponent,
    FilterPipe
  ],
  imports: [
    //Angular material
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
