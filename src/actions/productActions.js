import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    SHOW_CATEGORY,
  } from "./types";
  import hillsServerApi from "../config/h2hapi";
  import { showSuccessSnackbar, showErrorSnackbar } from "./index";
  
  export const getProducts = () => {
    return async (dispatch) => {
      dispatch({ type: GET_PRODUCTS_REQUEST });
      try {
        const res = await hillsServerApi.get("/product");
        const data = res.data.data.product;
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
      } catch (error) {
        dispatch(showErrorSnackbar(error.message));
      }
    };
  };
  
  export const getProductById = (id) => {
    return async (dispatch) => {
      dispatch({ type: GET_PRODUCT_REQUEST });
      try {
        const res = await hillsServerApi.get(`/product/${id}`);
        const data = res.data.data.product;
  
        dispatch({
          type: GET_PRODUCT_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch(showErrorSnackbar(error.message));
      }
    };
  };
  


  export const showOnlyCategoryProducts = (category) => {
    return async (dispatch) => {
      try {
        dispatch({ type: SHOW_CATEGORY });
        const response = await hillsServerApi.get(
          `/product?category=${category}`
        );
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: response.data.data.product,
        });
      } catch (error) {
        dispatch(showErrorSnackbar(error.message));
      }
    };
  };