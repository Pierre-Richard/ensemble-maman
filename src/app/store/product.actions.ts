import { createAction, props } from '@ngrx/store';
import { Product } from '../shared/interfaces/product';

//Action pour commencer le chargement des produits
export const loadProduct = createAction('[Product] Load Product');
//Action pour indiquer le succes du chargement de la liste des produits
export const loadProductSuccesss = createAction(
  '[Product] load Product Success',
  props<{ products: Product[] }>()
);
//Action pour indique que le chargement des produits à echoué
export const loadProductFailure = createAction(
  '[Product] Load Product Failure'
);
