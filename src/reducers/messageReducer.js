import {
  SHOW_SUCCESS_MESSAGE,
  SHOW_ERROR_MESSAGE,
  CLEAR_MESSAGES,
} from "../actions/types";

const initState = {
  message: "",
  successSnackbarOpen: false,
  errorSnackbarOpen: false,
};

const messsageReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_SUCCESS_MESSAGE:
      return {
        ...state,
        successSnackbarOpen: true,
        message: action.message,
      };
    case SHOW_ERROR_MESSAGE:
      return {
        ...state,
        errorSnackbarOpen: true,
        message: action.message,
      };
    case CLEAR_MESSAGES:
      return {
        ...initState,
        successSnackbarOpen: false,
        errorSnackbarOpen: false,
      };
    default:
      return state;
  }
};

export default messsageReducer;
