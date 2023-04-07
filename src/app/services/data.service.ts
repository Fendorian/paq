import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../models/category.model';

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
}
