import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products!: Product[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}
