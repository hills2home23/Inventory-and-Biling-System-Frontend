import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOGOUT_SUCCESS,
} from "../actions/types";

const initState = {
  user: null,
  token: null,
  isauthenticated: false,
};

const authReducers = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isauthenticated: true,
      };
    }

    case LOGOUT_SUCCESS: {
      return {
        ...initState,
      };
    }

    default:
      return state;
  }
};
export default authReducers;
