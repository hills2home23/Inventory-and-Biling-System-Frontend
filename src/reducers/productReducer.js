import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  SHOW_CATEGORY,
} from "../actions/types";

const initState = {
  products: [],
  productDetails: {},
  loading: false,
};
const productReducers = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
    case GET_PRODUCTS_REQUEST: {
      return { ...state, loading: true };
    }

    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    }

    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        productDetails: action.payload,
        loading: false,
      };
    }

    case SHOW_CATEGORY: {
      return { ...state, loading: true };
    }

    default:
      return state;
  }
};
export default productReducers;
