import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LogInComponent} from './authentication/log-in/log-in.component';
import {MainComponent} from './main/main.component';
import {SignUpComponent} from './authentication/sign-up/sign-up.component';


const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LogInComponent},
  {path: 'signUp', component: SignUpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
