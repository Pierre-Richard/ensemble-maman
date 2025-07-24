import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

// Sélecteur pour accéder à l'état des produits
export const selectProductState =
  createFeatureSelector<ProductState>('products');

// // Sélecteur pour accéder à la liste des produits
export const selectProductsList = createSelector(
  selectProductState,
  (state: ProductState) => state.productList
);

export const selectProductsLoading = createSelector(
  selectProductState,
  (state: ProductState) => state.loading
);
