import { createReducer, on } from '@ngrx/store';
import { Product } from '../shared/interfaces/product';
import {
  loadProduct,
  loadProductSuccesss,
  loadProductFailure,
} from '../store/product.actions';
export interface ProductState {
  productList: Product[]; // liste des produits
  loading: boolean; // indicateur si la liste à bien été chargé
}

const initialeProductState: ProductState = {
  productList: [], // liste des produits initiale vide
  loading: true, // indicateur des changements à true
};

export const productsReducer = createReducer(
  initialeProductState,
  on(loadProduct, (state) => ({
    ...state,
    loading: true,
  })),

  on(loadProductSuccesss, (state, { products }) => ({
    ...state,
    productList: products,
  })),

  on(loadProductFailure, (state) => ({
    ...state,
    loading: false,
  }))
);
