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

const initState = {
    offlineOrders: [],
    offlineOrder: {},
    loading: false
};

const offlineOrderReducers = (state = initState, action) => {
    switch (action.type) {
        case GET_OFFLINE_ORDERS_REQUEST:
        case GET_OFFLINE_ORDER_REQUEST:
        case ADD_OFFLINE_ORDER_REQUEST:
        case UPDATE_OFFLINE_ORDER_REQUEST:
        case DELETE_OFFLINE_ORDER_REQUEST: {
            return { ...state, loading: true };
        }

        case GET_OFFLINE_ORDERS_SUCCESS: {
            return {
                ...state,
                offlineOrders: action.payload,
                loading: false
            };
        }
        
        case GET_OFFLINE_ORDER_SUCCESS: {
            return {
                ...state,
                offlineOrder: action.payload,
                loading: false
            };
        }

        case ADD_OFFLINE_ORDER_SUCCESS: {
            return {
                ...state,
                offlineOrder: action.payload,
                loading: false
            };
        }

        case UPDATE_OFFLINE_ORDER_SUCCESS: {
            return {
                ...state,
                offlineOrder: action.payload,
                loading: false
            };
        }

        case DELETE_OFFLINE_ORDER_SUCCESS: {
            const newOfflineOrders = state.offlineOrders.filter(
                (offlineOrder) => offlineOrder._id !== action.payload
            );
            return {
                ...state,
                offlineOrders: newOfflineOrders,
                loading: false
            };
        }
        default:
            return state;
    }
};

export default offlineOrderReducers;