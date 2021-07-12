const BASE_URL = 'http://ambitiouskyle.iptime.org:6389';

export const API = {
  LIST: `${BASE_URL}/products/list`,
  CART: `${BASE_URL}/orders/cart`,
};

export const SIGNINAPI = {
  LIST: `${BASE_URL}/products/list`,
};

const JUNYOUNGURL = 'http://ambitiouskyle.iptime.org:6389';

export const JUNYOUNG_URL = {
  LOGIN: `${JUNYOUNGURL}/users/signin`,
  SIGNUP: `${JUNYOUNGURL}/users/signup`,
};

export const SIGNIN_API = `${LOGIN_BASE_URL}/signin`;

export const CART_API = {
  CART: `${JY_BASE_URL}/orders/cart`,
};
