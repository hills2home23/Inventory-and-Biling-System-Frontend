import {USER_DATA_SUCCESS } from "./types";
import hillsServer from "../config/axios";


export const getUserData = (userId) => {
  return async (dispatch) => {
    const response = await hillsServer.get(`users/${userId}`);

    if (response) {
      dispatch({
        type: USER_DATA_SUCCESS,
        payload: response.data.data.user,
      });
    }
  };
};