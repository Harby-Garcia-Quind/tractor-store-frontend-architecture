import type { ProductId, StoreId } from '../shared/ids';
import type { Money } from '../shared/money.model';
import type { ProductImage } from '../shared/product-image.model';

export interface Product {
  id: ProductId;
  name: string;
  brand: string;
  category: string;
  description: string;
  basePrice: Money;
  images: ProductImage[];
  availableStores: StoreId[];
}