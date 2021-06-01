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

const initState = {
    warehouses: [],
    warehouse: {},
    loading: false
};

const warehouseReducers = (state = initState, action) => {
    switch (action.type) {
        case GET_WAREHOUSES_REQUEST:
        case ADD_WAREHOUSE_REQUEST:
        case UPDATE_WAREHOUSE_REQUEST:
        case DELETE_WAREHOUSE_REQUEST: {
            return { ...state, loading: true };
        }

        case GET_WAREHOUSES_SUCCESS: {
            // console.log(action.payload);
            return {
                ...state,
                warehouses: action.payload,
                loading: false
            };
        }
        
        case ADD_WAREHOUSE_SUCCESS: {
            return {
                ...state,
                warehouse: action.payload,
                loading: false
            };
        }
        
        case UPDATE_WAREHOUSE_SUCCESS: {
            return {
                ...state,
                warehouse: action.payload,
                loading: false
            };
        }
        
        case DELETE_WAREHOUSE_SUCCESS: {
            const newWarehouses = state.warehouses.filter(
                (warehouse) => warehouse._id !== action.payload
            );
            return {
                ...state,
                warehouses: newWarehouses,
                loading: false
            };
        }
        default:
            return state;
    }
};

export default warehouseReducers;