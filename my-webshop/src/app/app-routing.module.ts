import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductComponent} from './cart/product/product.component';
import {LogInComponent} from "./authentication/log-in/log-in.component";
import {SignUpComponent} from "./authentication/sign-up/sign-up.component";


const routes: Routes = [
  {path: '', redirectTo: '/product', pathMatch: 'full'},
  {path: 'product', component: ProductComponent},
  {path: 'login', component: LogInComponent},
  {path: 'signup', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
