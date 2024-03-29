import {
  GET_EMPLOYEES_REQUEST,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEE_REQUEST,
  GET_EMPLOYEE_SUCCESS,
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

export const getEmployeeByID = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_EMPLOYEE_REQUEST });
    try {
      const res = await hillsServerApi.get(`/employee/${id}`);
      const data = res.data.data.employee;
      dispatch({
        type: GET_EMPLOYEE_SUCCESS,
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


export const sendEmail = (data) => {
  return async (dispatch) => {
      console.log(data);
      try {
        const token = localStorage.getItem("token");
        hillsServerApi.defaults.headers.common["Authorization"] = token;
        const res = await hillsServerApi.post("/email/sendmail", data);
        dispatch(showSuccessSnackbar("User Registered Successfully"));
      } catch (error) {
        dispatch(showErrorSnackbar("There seems to an issue. Try again later"));
      }
  };
};
