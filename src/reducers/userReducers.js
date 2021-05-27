import {
  RESET_USER,
  USER_DATA_SUCCESS,
} from "../actions/types";
const initState = {
  emails: [],
  userData: {},
};

const userReducers = (state = initState, action) => {
  switch (action.type) {
    case USER_DATA_SUCCESS: {
      return {
        ...state,
        userData: action.payload,
      };
    }
    case RESET_USER: {
      return {
        ...initState,
      };
    }

    default: {
      return state;
    }
  }
};
export default userReducers;
