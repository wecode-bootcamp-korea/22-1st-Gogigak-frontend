const BASE_URL = 'http://10.58.7.59:8000';
const LOGIN_BASE_URL = 'http://10.58.7.59:8000';
const JY_BASE_URL = 'http://ambitiouskyle.iptime.org:6389';

export const API = {
  LIST: `${BASE_URL}/products/list`,
};

export const SIGNIN_API = `${LOGIN_BASE_URL}/signin`;

export const CART_API = {
  CART: `${JY_BASE_URL}/orders/cart`,
};
