import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { SliderComponent } from './slider/slider.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { FormsModule } from '@angular/forms';
import { HomepageCategoryFilterComponent } from './homepage-category-filter/homepage-category-filter.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [ // Update this line, change routes to appRoutes
  { path: '', component: HomeComponent },
  { path: 'products', component: HomepageCategoryFilterComponent },
  { path: 'product/:id', component: ProductDetailComponent },
];

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SubcategoriesComponent,
    HeaderComponent,
    ProductDetailComponent,
    SliderComponent,
    CategoryFilterComponent,
    HomepageCategoryFilterComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
