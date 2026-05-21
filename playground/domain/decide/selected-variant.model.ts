import type { Variant } from './variant.model';

export type SelectedVariant = Pick<Variant, 'id' | 'productId' | 'name' | 'sku' | 'price'>;