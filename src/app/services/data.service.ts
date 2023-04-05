import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Product 1 description', price: 10.99, categoryId: 1 },
    { id: 2, name: 'Product 2', description: 'Product 2 description', price: 20.99, categoryId: 2 },
    { id: 3, name: 'Product 3', description: 'Product 3 description', price: 30.99, categoryId: 1 },
  ];

  private categories: Category[] = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }
}
