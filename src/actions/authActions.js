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
        const res = await hillsServer.post("/users/signup", authDetails);
        if (res.data.status === "success") {
          const { user } = res.data.data;
          const { token } = res.data;
  
          localStorage.setItem("token", token);
          hillsServer.defaults.headers.common["Authorization"] = token;
          localStorage.setItem("user", JSON.stringify(user));
  
          dispatch({
            type: SIGNUP_SUCCESS,
            payload: { user, token },
          });
          history.push("/");
  
          dispatch(showSuccessSnackbar("User Registered Successfully"));
        }
      } catch (error) {
        dispatch(showErrorSnackbar("There seems to an issue. Try again later"));
      }
    };
  };
  
  export const signInAction = (user) => {
    return async (dispatch) => {
      try {
        const res = await hillsServer.post("/users/login", user);
        if (res.data.status === "success") {
          const { user } = res.data.data;
          const { token } = res.data;
          localStorage.setItem("token", token);
          hillsServer.defaults.headers.common["Authorization"] = token;
          localStorage.setItem("user", JSON.stringify(user));
  
          dispatch({
            type: LOGIN_SUCCESS,
            payload: { user, token },
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
      dispatch({ type: RESET_SHIPMENT });
      dispatch({ type: RESET_USER });
      dispatch({ type: LOGOUT_SUCCESS });
    };
  };
  
  export const forgetPassword = (resetPasswordEmail) => {
    return async (dispatch) => {
      try {
        const res = await hillsServer.post("/users/forgotPassword", {
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
          `/users/resetPassword/${authDetails.token}`,
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
      const shiprocketToken = localStorage.getItem("shiprocketToken");
      if (token) {
        hillsServer.defaults.headers.common["Authorization"] = token;
        const user = JSON.parse(localStorage.getItem("user"));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
        if (shiprocketToken) {
          dispatch({
            type: SHIPROCKET_SIGNIN_SUCCESS,
          });
        }
        history.push("/");
      }
      else{
        history.push("/");
      }
    };
};
