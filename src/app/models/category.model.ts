import { Product } from '../models/product.model';

export interface Category {
  subcategories: any;
  id: number;
  name: string;
  products: Product[];
}