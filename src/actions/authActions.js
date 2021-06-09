import {
    LOGIN_SUCCESS,
    SIGNUP_SUCCESS,
    LOGOUT_SUCCESS,
    RESET_SHIPMENT,
    RESET_USER,
    SHIPROCKET_SIGNIN_SUCCESS,
  } from "./types";
  import { showSuccessSnackbar, showErrorSnackbar } from "./messageActions";
  
  import hillsServer from "../config/axios";
  import history from "../config/history";
  
  export const signUpAction = (authDetails) => {
    return async (dispatch) => {
      try {
        const res = await hillsServer.post("/employee/signup", authDetails);
        if (res.data.status === "success") {
          const { employee } = res.data.data;
          const { token } = res.data;
  
          localStorage.setItem("token", token);
          hillsServer.defaults.headers.common["Authorization"] = token;
          localStorage.setItem("user", JSON.stringify(employee));
  
          dispatch({
            type: SIGNUP_SUCCESS,
            payload: { employee, token },
          });
          history.push("/");
  
          dispatch(showSuccessSnackbar("Employee Registered Successfully"));
        }
      } catch (error) {
        dispatch(showErrorSnackbar("There seems to an issue. Try again later"));
      }
    };
  };
  
  export const signInAction = (user) => {
    return async (dispatch) => {
      try {
        const res = await hillsServer.post("/employee/login", user);
        if (res.data.status === "success") {
          const { employee } = res.data.data;
          const { token } = res.data;
          localStorage.setItem("token", token);
          hillsServer.defaults.headers.common["Authorization"] = token;
          localStorage.setItem("user", JSON.stringify(user));
  
          dispatch({
            type: LOGIN_SUCCESS,
            payload: { employee, token },
          });
          history.push("/");
        }
      } catch (error) {
        dispatch(showErrorSnackbar("Incorrect email or password"));
      }
    };
  };
  
  export const logout = () => {
    return (dispatch) => {
      localStorage.clear();
      delete hillsServer.defaults.headers.common["Authorization"];
      dispatch({ type: RESET_USER });
      dispatch({ type: LOGOUT_SUCCESS });
    };
  };
  
  export const forgetPassword = (resetPasswordEmail) => {
    return async (dispatch) => {
      try {
        const res = await hillsServer.post("/employee/forgotPassword", {
          email: resetPasswordEmail,
        });
        if (res.data.status === "success") {
          dispatch(
            showSuccessSnackbar("Password Reset Link has been sent successfully")
          );
        }
      } catch (error) {
        dispatch(showErrorSnackbar("This Email doesn't exist"));
      }
    };
  };
  
  export const resetPassword = (authDetails) => {
    return async (dispatch) => {
      try {
        const res = await hillsServer.patch(
          `/employee/resetPassword/${authDetails.token}`,
          authDetails
        );
        if (res.data.status === "success") {
          dispatch(
            showSuccessSnackbar(
              "Password has been changed successfully Try to login"
            )
          );
        }
      } catch (error) {
        dispatch(showErrorSnackbar("Token is invalid or has expired"));
      }
    };
  };
  
  export const isUserLoggedIn = () => {
    return async (dispatch) => {
      const token = localStorage.getItem("token");
      if (token) {
        hillsServer.defaults.headers.common["Authorization"] = token;
        const employee = JSON.parse(localStorage.getItem("employee"));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            token,
            employee,
          },
        });
        history.push("/");
      }
      else{
        history.push("/login");
      }
    };
};
