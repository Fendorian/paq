import { Product } from '../models/product.model';
export interface Subcategory {
  id: number;
  name: string;
  products: Product[];
}