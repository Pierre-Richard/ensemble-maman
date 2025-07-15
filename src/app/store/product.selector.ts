import { createFeatureSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

export const selectProductState =
  createFeatureSelector<ProductState>('products');
