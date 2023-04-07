import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';


const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'subcategories', component: SubcategoriesComponent},
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'filter', component: CategoryFilterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
