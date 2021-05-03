import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {HeaderComponent} from './header/header.component';
import {AppComponent} from './app.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {SignUpComponent} from './authentication/sign-up/sign-up.component';
import {LogInComponent} from './authentication/log-in/log-in.component';
import {CartComponent} from './cart/cart.component';
import {AddCartComponent} from './cart/add-cart/add-cart.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ItemComponent} from './cart/item/item.component';
import {FilterPipe} from './filter.pipe';
import {AppRoutingModule} from './app-routing.module';
import {DamerHomeComponent} from './damer-home/damer-home.component';
import {GetTheLookDamerComponent} from './damer-home/get-the-look-damer/get-the-look-damer.component';
import {ToejComponent} from './damer-home/toej/toej.component';
import {SkoComponent} from './damer-home/sko/sko.component';
import {HerreHomeComponent} from './herre-home/herre-home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent,
    SignUpComponent,
    LogInComponent,
    CartComponent,
    AddCartComponent,
    ItemComponent,
    FilterPipe,
    DamerHomeComponent,
    GetTheLookDamerComponent,
    ToejComponent,
    SkoComponent,
    HerreHomeComponent
  ],
    imports: [
     //   FormsModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
