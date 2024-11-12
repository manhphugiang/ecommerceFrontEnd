import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDetailComponent} from './product-detail/product-detail.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
const productDetailRoute: Routes = [
  { path: 'products/:productId', component: ProductDetailComponent },
];

