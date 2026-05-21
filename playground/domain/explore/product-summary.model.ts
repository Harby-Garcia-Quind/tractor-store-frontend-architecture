import type { Product } from './product.model';

export type ProductSummary = Pick<Product,'id' | 'name' | 'brand' | 'category' | 'basePrice'> & {
  primaryImageUrl: string;
};