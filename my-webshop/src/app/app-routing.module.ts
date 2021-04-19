import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ProductComponent } from './cart/product/product.component';
import {CatCreateComponent} from './category/category-create/category-create.component'


const routes: Routes = [
{path: 'productt', component: ProductComponent},
{path:'cat',component : CatCreateComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
