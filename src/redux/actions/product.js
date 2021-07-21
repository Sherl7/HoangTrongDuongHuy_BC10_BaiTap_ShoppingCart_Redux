import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SHOW_PRODUCT_INFO,
  CHANGE_NUMBER_PRODUCT_CART,
} from "../constants/actionType";

export const actAddProduct = (product) => {
  product = { ...product, soLuong: 1 };
  return {
    type: ADD_PRODUCT,
    product,
  };
};

export const actDeleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    productId,
  };
};

export const actShowProductInfo = (product) => {
  return {
    type: SHOW_PRODUCT_INFO,
    product,
  };
};

export const actChangeNumberProductCart = (productId, isIncrease) => {
  return {
    type: CHANGE_NUMBER_PRODUCT_CART,
    productId,
    isIncrease,
  };
};
