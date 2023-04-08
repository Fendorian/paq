import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<{ categories: Category[] }>(this.dataUrl).pipe(
      map((data) => data.categories)
    );
  }
  getProductById(productId: number): Observable<Product | undefined> {
    return new Observable((observer) => {
      this.http.get<{ categories: any[] }>(this.dataUrl).subscribe((data) => {
        const products: Product[] = [];

        for (const category of data.categories) {
          for (const subcategory of category.subcategories) {
            products.push(...subcategory.products);
          }
        }

        const product = products.find((product) => product.id === productId);
        observer.next(product);
        observer.complete();
      });
    });
  }
}
