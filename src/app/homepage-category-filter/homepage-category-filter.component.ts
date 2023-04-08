// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Category } from '../models/category.model'
// import { Data } from '../models/data.model'

// @Component({
//   selector: 'app-homepage-category-filter',
//   templateUrl: './homepage-category-filter.component.html',
//   styleUrls: ['./homepage-category-filter.component.css']
// })
// export class HomepageCategoryFilterComponent  implements OnInit {
//   data: Data = { categories: [] };
//   selectedCategoryId: number | null = null;
//   filteredProducts: any[] = [];

//   constructor(private http: HttpClient) { }

//   ngOnInit(): void {
//     this.loadData();
//   }
//   loadData(): void {
//     this.http.get('assets/data.json').subscribe((data: any) => {
//       this.data = data;
//       this.filterProducts();
//     });
//   }
//   filterProducts(): void {
//     this.filteredProducts = [];
//     for (const category of this.data.categories) {
//       if (this.selectedCategoryId === null || this.selectedCategoryId === category.id) {
//         for (const subcategory of category.subcategories) {
//           for (const product of subcategory.products) {
//             this.filteredProducts.push(product);
//           }
//         }
//       }
//     }
//   }

//   selectCategory(id: number | null): void {
//     this.selectedCategoryId = id;
//     this.filterProducts();
//   }
// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { Subcategory } from '../models/subcategory.model';
import { Data } from '../models/data.model';

@Component({
  selector: 'app-homepage-category-filter',
  templateUrl: './homepage-category-filter.component.html',
  styleUrls: ['./homepage-category-filter.component.css']
})
export class HomepageCategoryFilterComponent implements OnInit {
  data: Data = { categories: [] };
  selectedCategoryId: number | null = null;
  filteredSubcategories: Subcategory[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.http.get<Data>('assets/data.json').subscribe((data: Data) => {
      this.data = data;
    });
  }

  selectCategory(categoryId: number | null): void {
    this.selectedCategoryId = categoryId;
    if (categoryId === null) {
      this.filteredSubcategories = [];
    } else {
      const selectedCategory = this.data.categories.find(category => category.id === categoryId);
      if (selectedCategory) {
        this.filteredSubcategories = selectedCategory.subcategories;
      }
    }
  }
}
