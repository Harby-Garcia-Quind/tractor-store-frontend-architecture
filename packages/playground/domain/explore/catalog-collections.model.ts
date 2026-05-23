import type { ProductId } from '../shared/ids';
import type { Product } from './product.model';
import type { ProductSummary } from './product-summary.model';

export type ProductsById = Record<ProductId, Product>;

export type ProductSummariesById = Record<ProductId, ProductSummary>;