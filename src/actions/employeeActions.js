import {
  GET_EMPLOYEES_REQUEST,
  GET_EMPLOYEES_SUCCESS,
  DELETE_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_SUCCESS
} from "../actions/types";

import hillsServerApi from "../config/axios";
import { showErrorSnackbar, showSuccessSnackbar } from "./index";

export const getEmployees = () => {
  return async (dispatch) => {
    dispatch({ type: GET_EMPLOYEES_REQUEST });
    try {
      const res = await hillsServerApi.get("/employee");
      const data = res.data.data.employees;
      dispatch({
        type: GET_EMPLOYEES_SUCCESS,
        payload: data
      });
    }
    catch (error) {
      dispatch(showErrorSnackbar(error.message));
    }
  };
};

export const deleteEmployee = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_EMPLOYEE_REQUEST });
    try {
      const res = await hillsServerApi.delete(`/employee/${id}`);
      if (res.data.status === "success") {
        dispatch({
          type: DELETE_EMPLOYEE_SUCCESS
        });
        dispatch(showSuccessSnackbar("Employee Deleted"));
      }
    }
    catch (error) {
      dispatch(showErrorSnackbar(error.message));
    }
  };
};