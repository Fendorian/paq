import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-homepage-category-filter',
  templateUrl: './homepage-category-filter.component.html',
  styleUrls: ['./homepage-category-filter.component.css']
})
export class HomepageCategoryFilterComponent implements OnInit {
  categories: Category[] = [];
  selectedProduct: Product | undefined;
  visibleSubcategories: number[] = [];



  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
  toggleSubcategories(categoryId: number): void {
    if (this.visibleSubcategories.includes(categoryId)) {
      this.visibleSubcategories = [];
    } else {
      this.visibleSubcategories = [categoryId];
    }
  }
  
  isSubcategoriesVisible(categoryId: number): boolean {
    return this.visibleSubcategories.includes(categoryId);
  }
  
  showProductDetails(product: Product) {
    this.selectedProduct = product;
  }
}
