import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateProductComponent } from './components/products/create-product/create-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "add",
    component: CreateProductComponent
  },
  {
    path: "edit/:id",
    component: EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
