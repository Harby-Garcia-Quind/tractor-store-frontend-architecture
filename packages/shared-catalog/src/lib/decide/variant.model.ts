import type { ProductId, VariantId } from '../shared/ids';
import type { Money } from '../shared/money.model';

export interface Variant {
  id: VariantId;
  productId: ProductId;
  name: string;
  sku: string;
  color: string;
  engine: string;
  price: Money;
  stock: number;
}
