import axios from "axios";
import TYPES from "../constants";

const {
  PROCESSING,
  AUTH_FAILURE,
  AUTH_SUCCESS,
  USER_LOGOUT,
  SIGNING_OUT,
} = TYPES;

const processing = (bool) => ({
  type: PROCESSING,
  bool,
});

const signingOut = (bool) => ({
  type: SIGNING_OUT,
  bool,
});

const authSuccess = (user) => ({
  type: AUTH_SUCCESS,
  user,
});

const authFailure = (error) => ({
  type: AUTH_FAILURE,
  error,
});

const logoutUser = () => ({
  type: USER_LOGOUT,
});

const authRequest = (payload) => async (dispatch) => {
  const path = Object.keys(payload).includes("name") ? "/users" : "/sessions";
  const BASE_URL = process.env.REACT_BASE_URL;
  dispatch(processing(true));
  try {
    const url = `${BASE_URL}${path}`;
    const response = await axios.post(url, payload);
    const { token } = response.data;
    localStorage.setItem("token", token);
    dispatch(authSuccess(payload.email));
  } catch (error) {
    dispatch(authFailure(error.response.data.message));
  } finally {
    dispatch(processing(false));
  }
};

const logoutRequest = () => async (dispatch) => {
  dispatch(signingOut(true));
  try {
    localStorage.removeItem("token");
    dispatch(logoutUser());
  } catch (error) {
    dispatch(authFailure(error.response.data.message));
  } finally {
    dispatch(signingOut(false));
  }
};

export { authFailure, authSuccess, authRequest, logoutRequest };
