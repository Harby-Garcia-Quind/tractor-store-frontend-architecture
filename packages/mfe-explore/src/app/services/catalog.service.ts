import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import type { ProductSummary, Store } from 'shared-catalog';
import { EXPLORE_API_URL } from '../tokens/explore-api-url.token';

const HOME_PRODUCTS: ProductSummary[] = [
  {
    id: 'prod-1',
    name: 'PowerTrac 50',
    brand: 'TractorCo',
    category: 'Compact Tractors',
    basePrice: { amount: 18500, currency: 'USD' },
    primaryImageUrl:
      'https://images.unsplash.com/photo-1567416661576-659f9e5c4d43?w=600&q=80',
  },
  {
    id: 'prod-2',
    name: 'FieldMaster 80',
    brand: 'AgriForce',
    category: 'Utility Tractors',
    basePrice: { amount: 34999, currency: 'USD' },
    primaryImageUrl:
      'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=600&q=80',
  },
  {
    id: 'prod-3',
    name: 'HarvestKing 120',
    brand: 'GreenField',
    category: 'Row Crop Tractors',
    basePrice: { amount: 62000, currency: 'USD' },
    primaryImageUrl:
      'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80',
  },
];

const CATEGORY_PRODUCTS: ProductSummary[] = [
  {
    id: 'prod-4',
    name: 'FieldMaster 80',
    brand: 'AgriForce',
    category: 'Utility Tractors',
    basePrice: { amount: 34999, currency: 'USD' },
    primaryImageUrl:
      'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=600&q=80',
  },
  {
    id: 'prod-5',
    name: 'WorkHorse 65',
    brand: 'TractorCo',
    category: 'Utility Tractors',
    basePrice: { amount: 28750, currency: 'USD' },
    primaryImageUrl:
      'https://images.unsplash.com/photo-1567416661576-659f9e5c4d43?w=600&q=80',
  },
  {
    id: 'prod-6',
    name: 'LandForce 90',
    brand: 'GreenField',
    category: 'Utility Tractors',
    basePrice: { amount: 41200, currency: 'USD' },
    primaryImageUrl:
      'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80',
  },
];

const STORES: Store[] = [
  { id: 'store-1', name: 'Main Street Tractors', city: 'Nashville', country: 'USA' },
  { id: 'store-2', name: 'AgriPro Center', city: 'Columbus', country: 'USA' },
  { id: 'store-3', name: 'Midwest Equipment', city: 'Des Moines', country: 'USA' },
  { id: 'store-4', name: 'Southern Fields', city: 'Birmingham', country: 'USA' },
];

@Injectable({ providedIn: 'root' })
export class CatalogService {
  private readonly apiUrl = inject(EXPLORE_API_URL);

  getHomeProducts(): Observable<ProductSummary[]> {
    void this.apiUrl;
    return of(HOME_PRODUCTS);
  }

  getCategoryProducts(_categoryId: string): Observable<ProductSummary[]> {
    return of(CATEGORY_PRODUCTS);
  }

  getStores(): Observable<Store[]> {
    return of(STORES);
  }
}
