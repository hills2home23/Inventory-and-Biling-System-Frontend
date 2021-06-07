import {
    GET_OFFLINE_ORDERS_REQUEST,
    GET_OFFLINE_ORDERS_SUCCESS,
    GET_OFFLINE_ORDER_REQUEST,
    GET_OFFLINE_ORDER_SUCCESS,
    ADD_OFFLINE_ORDER_REQUEST,
    ADD_OFFLINE_ORDER_SUCCESS,
    UPDATE_OFFLINE_ORDER_REQUEST,
    UPDATE_OFFLINE_ORDER_SUCCESS,
    DELETE_OFFLINE_ORDER_REQUEST,
    DELETE_OFFLINE_ORDER_SUCCESS
} from "../actions/types";

import hillsServerApi from "../config/axios";
import { showErrorSnackbar, showSuccessSnackbar } from "./index";

export const getOfflineOrders = () => {
    return async (dispatch) => {
        dispatch({ type: GET_OFFLINE_ORDERS_REQUEST });
        try {
            const res = await hillsServerApi.get("/offorder");
            const data = res.data.data.offlineOrders;
            dispatch({
                type: GET_OFFLINE_ORDERS_SUCCESS,
                payload: data
            });
        }
        catch (err) {
            dispatch(showErrorSnackbar(err.message));
        }
    };
};

export const getOfflineOrderByID = (id) => {
    return async (dispatch) => {
        dispatch({ type: GET_OFFLINE_ORDER_REQUEST });
        try {
            const res = await hillsServerApi.get(`/offorder/${id}`);
            const data = res.data.data.offlineOrder;
            dispatch({
                type: GET_OFFLINE_ORDER_SUCCESS,
                payload: data
            });
        }
        catch (err) {
            dispatch(showErrorSnackbar(err.message));
        }
    };
};

export const addOfflineOrder = (offlineOrder) => {
    return async (dispatch) => {
        dispatch({ type: ADD_OFFLINE_ORDER_REQUEST });
        try {
            const res = await hillsServerApi.post("/offorder", offlineOrder);
            if (res.data.status === "success") {
                const data = res.data.data.offlineOrder;
                dispatch({
                    type: ADD_OFFLINE_ORDER_SUCCESS,
                    payload: data
                });
            }
        }
        catch (err) {
            dispatch(showErrorSnackbar(err.message));
        }
    };
};

export const updateOfflineOrder = (id, offlineOrder) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_OFFLINE_ORDER_REQUEST });
        try {
            const res = await hillsServerApi.patch(`/offorder/${id}`, offlineOrder);
            if (res.data.status === "success") {
                const data = res.data.data.offlineOrder;
                dispatch({
                    type: UPDATE_OFFLINE_ORDER_SUCCESS,
                    payload: data
                });
                dispatch(showSuccessSnackbar("Offline Order Updated"));
            }
        }
        catch (err) {
            dispatch(showErrorSnackbar(err.message));
        }
    };
};

export const deleteOfflineOrder = (id) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_OFFLINE_ORDER_REQUEST });
        try {
            const res = await hillsServerApi.delete(`/offorder${id}`);
            if (res.data.status === "success") {
                dispatch({
                    type: DELETE_OFFLINE_ORDER_SUCCESS,
                });
                dispatch(showSuccessSnackbar("Offline Order Deleted"));
            }
        }
        catch (err) {
            dispatch(showErrorSnackbar(err.message));
        }
    };
};