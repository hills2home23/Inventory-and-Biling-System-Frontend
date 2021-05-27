import {
    SHOW_ERROR_MESSAGE,
    SHOW_SUCCESS_MESSAGE,
    CLEAR_MESSAGES,
  } from "./types";
  
  export const showSuccessSnackbar = (message) => {
    return (dispatch) => {
      dispatch({ type: SHOW_SUCCESS_MESSAGE, message });
    };
  };
  export const showErrorSnackbar = (message) => {
    return (dispatch) => {
      dispatch({ type: SHOW_ERROR_MESSAGE, message });
    };
  };
  
  export const clearMessages = () => (dispatch) => {
    dispatch({
      type: CLEAR_MESSAGES,
    });
  };
  