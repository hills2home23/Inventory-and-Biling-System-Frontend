import {
  GET_EMPLOYEES_REQUEST,
  GET_EMPLOYEES_SUCCESS,
  DELETE_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_SUCCESS
} from "../actions/types";

const initState = {
  employees: [],
  loading: false
};

const employeeReducers = (state = initState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES_REQUEST:
    case DELETE_EMPLOYEE_REQUEST: {
      return { ...state, loading: true };
    }

    case GET_EMPLOYEES_SUCCESS: {
      return {
        ...state,
        employees: action.payload,
        loading: false
      };
    }

    case DELETE_EMPLOYEE_SUCCESS: {
      const newEmployees = state.employees.filter(
        (employee) => employee._id !== action.payload
      );
      return {
        ...state,
        employees: newEmployees,
        loading: false
      };
    }
    default:
      return state;
  }
};

export default employeeReducers;