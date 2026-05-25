import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import type { Product, Variant, ProductId } from 'shared-catalog';
import { DECIDE_API_URL } from '../tokens/decide-api-url.token';

const MOCK_PRODUCT: Product = {
  id: 'tractor-001',
  name: 'Big Tractor 5000',
  brand: 'Tractor Corp',
  category: 'Utility',
  description: 'A reliable tractor for demanding field work.',
  basePrice: { amount: 25000, currency: 'USD' },
  images: [
    {
      url: 'https://images.unsplash.com/photo-1567416661576-659f9e5c4d43?w=800&q=80',
      alt: 'Big Tractor 5000',
    },
  ],
  availableStores: ['store-1', 'store-2'],
};

const MOCK_VARIANTS: Variant[] = [
  {
    id: 'var-red',
    productId: 'tractor-001',
    name: 'Red Diesel',
    sku: 'BT5000-RED',
    color: 'Red',
    engine: 'Diesel',
    price: { amount: 34999, currency: 'USD' },
    stock: 3,
  },
  {
    id: 'var-blue',
    productId: 'tractor-001',
    name: 'Blue Diesel',
    sku: 'BT5000-BLU',
    color: 'Blue',
    engine: 'Diesel',
    price: { amount: 35499, currency: 'USD' },
    stock: 1,
  },
  {
    id: 'var-black',
    productId: 'tractor-001',
    name: 'Black Hybrid',
    sku: 'BT5000-BLK',
    color: 'Black',
    engine: 'Hybrid',
    price: { amount: 38999, currency: 'USD' },
    stock: 0,
  },
];

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly apiUrl = inject(DECIDE_API_URL);

  getProductById(_id: ProductId): Observable<Product> {
    console.log('Fetching product by ID:', _id, 'from API:', this.apiUrl);
    return of(MOCK_PRODUCT);
  }

  getVariantsByProductId(_productId: ProductId): Observable<Variant[]> {
    console.log('Fetching variants for product ID:', _productId);
    return of(MOCK_VARIANTS);
  }
}
