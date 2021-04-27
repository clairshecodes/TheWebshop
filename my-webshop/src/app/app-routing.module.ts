import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DamerHomeComponent} from './damer-home/damer-home.component';
import {LogInComponent} from './authentication/log-in/log-in.component';
import {HerreHomeComponent} from './herre-home/herre-home.component';


const appRoutes: Routes = [
  {path: 'damer-home', component: DamerHomeComponent},
  {path: 'herre-home', component: HerreHomeComponent},
  {path: 'login', component: LogInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
