import { createSelector } from 'reselect';

const productState = state => state.Products;

export const productNameSelector = () => createSelector(
  productState,
  (product) => product.PRODUCT_NAME
);

export const productDescriptionSelector = () => createSelector(
  productState,
  (product) => product.PRODUCT_DESC
);
