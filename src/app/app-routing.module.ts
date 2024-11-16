import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ItemListComponent} from './item-list/item-list.component';
import {AddProductComponent} from './add-product/add-product.component';
import {ImageUploadComponent} from './image-upload/image-upload.component';

const approutes: Routes = [
  { path: 'products/:productId', component: ProductDetailComponent},
  {path:"", component: ItemListComponent},
  {path:"addProduct", component: AddProductComponent},
  {path:"details", component:ProductDetailComponent},
  {path: "items", component: ItemListComponent},
  {path:"uploadImages", component: ImageUploadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

