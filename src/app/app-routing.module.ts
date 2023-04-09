import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { HomeComponent } from './home/home.component';
import { HomepageCategoryFilterComponent } from './homepage-category-filter/homepage-category-filter.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: HomepageCategoryFilterComponent },
  { path: 'subcategories', component: HomepageCategoryFilterComponent },
  { path: 'contact', component: ContactComponent },
  // { path: 'products/:id', component: ProductDetailComponent },
  { path: 'filter', component: HomepageCategoryFilterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
