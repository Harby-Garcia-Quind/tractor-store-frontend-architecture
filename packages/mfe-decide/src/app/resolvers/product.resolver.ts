import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import type { Product } from 'shared-catalog';
import { ProductService } from '../services/product.service';

export const productResolver: ResolveFn<Product> = (route) => {
  const productService = inject(ProductService);
  const id = route.paramMap.get('id') ?? 'tractor-001';
  return productService.getProductById(id);
};
