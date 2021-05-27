import {
    GET_ORDER_SUCCESS,
    ORDER_DETAILS_UPDATED,
    GET_ORDER_DETAILS,
  } from "./types";
  import hillsServerApi from "../config/axios";
  import { showErrorSnackbar, showSuccessSnackbar } from "./messageActions";
  import hillsServer from "../config/axios";
  
  function myOrdersSetup(RespData) {
    let response = RespData;
    let productMap = new Map();
    let product;
    for (let j = 0; j < response.length; j++) {
      let arrayOfProduct = response[j].products;
      for (let i = 0; i < arrayOfProduct.length; ) {
        if (productMap.has(arrayOfProduct[i]._id)) {
          product = productMap.get(arrayOfProduct[i]._id);
          product.itemDuplicates = (product.itemDuplicates || 1) + 1;
          arrayOfProduct.splice(i, 1);
        } else {
          arrayOfProduct[i].itemDuplicates = 1;
          productMap.set(arrayOfProduct[i]._id, arrayOfProduct[i]);
          i++;
        }
      }
      productMap = null;
      productMap = new Map();
    }
    for (let j = 0; j < response.length; j++) {
      let arrayOfProduct = response[j].products;
      let total = 0;
      for (let i = 0; i < arrayOfProduct.length; i++) {
        total =
          total + arrayOfProduct[i].price * arrayOfProduct[i].itemDuplicates;
      }
    }
    return response;
  }
  export const getVerifiedProducts = () => {
    return async (dispatch) => {
      const token = localStorage.getItem("token");
      hillsServer.defaults.headers.common["Authorization"] = token;
      const response = await hillsServerApi.get(`/product/verifiedOrders`);
      console.log(response.data);
      const data = myOrdersSetup(response.data.data.sales);
      dispatch({ type: GET_ORDER_SUCCESS, payload: data });
    };
  };
  
  export const updateVerifiedProducts = (data, id) => {
    return async (dispatch) => {
      try {
        const response = await hillsServerApi.patch(
          `/product/verifiedOrders/${id}`,
          data
        );
        if (response) {
          dispatch({ type: ORDER_DETAILS_UPDATED, payload: data });
          await dispatch(getVerifiedProducts());
          dispatch({ type: GET_ORDER_DETAILS, payload: id });
          dispatch(
            showSuccessSnackbar("Successfully updated the order details.")
          );
        }
      } catch (error) {
        dispatch(showErrorSnackbar("There seems to an issue. Try again later"));
      }
    };
  };