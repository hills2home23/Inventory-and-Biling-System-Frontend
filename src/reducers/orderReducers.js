import {
  GET_ORDER_SUCCESS,
  GET_ORDER_DETAILS,
} from "../actions/types";

const initState = {
  orders: [],
  orderDetails: [],
};
const orderReducers = (state = initState, action) => {
  switch (action.type) {
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orders: action.payload,
      };
    }
    case GET_ORDER_DETAILS: {
      var orderData = state.orders.find(
        (order) => order._id === action.payload
      );

      return {
        ...state,
        orderDetails: orderData,
      };
    }

    default: {
      return state;
    }
  }
};
export default orderReducers;
