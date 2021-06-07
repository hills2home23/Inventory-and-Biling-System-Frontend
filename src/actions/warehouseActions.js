import {
  GET_WAREHOUSES_REQUEST,
  GET_WAREHOUSES_SUCCESS,
  ADD_WAREHOUSE_REQUEST,
  ADD_WAREHOUSE_SUCCESS,
  UPDATE_WAREHOUSE_REQUEST,
  UPDATE_WAREHOUSE_SUCCESS,
  DELETE_WAREHOUSE_REQUEST,
  DELETE_WAREHOUSE_SUCCESS
} from "../actions/types";

import hillsServerApi from "../config/axios";
import { showSuccessSnackbar, showErrorSnackbar } from "./index";

export const getWarehouses = () => {
  return async (dispatch) => {
    dispatch({ type: GET_WAREHOUSES_REQUEST });
    try {
      const res = await hillsServerApi.get("/warehouse");
      const data = res.data.data.warehouses;
      // console.log(data);
      dispatch({
        type: GET_WAREHOUSES_SUCCESS,
        payload: data
      });
    }
    catch (error) {
      dispatch(showErrorSnackbar(error.message));
    }
  };
};

export const addWarehouse = (warehouse) => {
  return async (dispatch) => {
    dispatch({ type: ADD_WAREHOUSE_REQUEST });
    try {
      const res = await hillsServerApi.post("/warehouse", warehouse);
      if (res.data.status === "success") {
        const data = res.data.data.warehouse;
        dispatch({
          type: ADD_WAREHOUSE_SUCCESS,
          payload: data
        });
      }
    }
    catch (error) {
      dispatch(showErrorSnackbar(error.message));
    }
  };
};

export const updateWarehouse = (id, warehouse) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_WAREHOUSE_REQUEST });
    try {
      const res = await hillsServerApi.patch(`/warehouse/${id}`, warehouse);
      if (res.data.status === "success") {
        const data = res.data.data.warehouse;
        dispatch({
          type: UPDATE_WAREHOUSE_SUCCESS,
          payload: data
        });
        dispatch(showSuccessSnackbar("Warehouse Updated"));
      }
    }
    catch (error) {
      dispatch(showErrorSnackbar(error.message));
    }
  };
};

export const deleteWarehouse = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_WAREHOUSE_REQUEST });
    try {
      const res = await hillsServerApi.delete(`/warehouse/${id}`);
      if (res.data.status === "success") {
        dispatch({
          type: DELETE_WAREHOUSE_SUCCESS
        });
        dispatch(showSuccessSnackbar("Warehouse Deleted"));
      }
    }
    catch (error) {
      dispatch(showErrorSnackbar(error.message));
    }
  };
};