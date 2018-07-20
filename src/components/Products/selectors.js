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

export const productWholePriceSelector = () => createSelector(
  productState,
  (product) => product.PRODUCT_WHOLE_PRICE
);

export const productRetailPriceSelector = () => createSelector(
  productState,
  (product) => product.PRODUCT_RETAIL_PRICE
);

export const enableAddProductSelector = () => createSelector(
  productState,
  (product) => {
    const a = product.PRODUCT_NAME.length>0;
    const b = product.PRODUCT_WHOLE_PRICE.length>0;
    const c = product.PRODUCT_RETAIL_PRICE.length>0;
    const d = product.PRODUCT_DESC.length>0;
    return !(a && b && c && d);
  }
);
