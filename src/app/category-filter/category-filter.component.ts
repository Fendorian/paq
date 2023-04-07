import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Category } from '../models/category.model';
import { Subcategory } from '../models/subcategory.model';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css'],
})
export class CategoryFilterComponent implements OnInit {
  categories: Category[] = [];
  selectedSubcategory: Subcategory | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  showProducts(subcategory: Subcategory): void {
    this.selectedSubcategory = subcategory;
  }
}
