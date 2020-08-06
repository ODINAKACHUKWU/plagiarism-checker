import axios from "axios";
import TYPES from "../constants";

const { COMPARING, COMPARISM_SUCCESS, COMPARISM_FAILURE } = TYPES;

const comparing = (bool) => ({
  type: COMPARING,
  bool,
});

const comparismSuccess = (result) => ({
  type: COMPARISM_SUCCESS,
  result,
});

const comparismFailure = (error) => ({
  type: COMPARISM_FAILURE,
  error,
});

const fetchLogsRequest = (payload) => async (dispatch) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  dispatch(comparing(true));
  try {
    const url = `${BASE_URL}/compare`;
    const response = await axios.post(url, payload);
    dispatch(comparismSuccess(response.data));
  } catch (error) {
    dispatch(comparismFailure(error.message));
  } finally {
    dispatch(comparing(false));
  }
};

const fetchLogRequest = (payload) => async (dispatch) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  dispatch(comparing(true));
  try {
    const url = `${BASE_URL}/compare`;
    const response = await axios.post(url, payload);
    dispatch(comparismSuccess(response.data));
  } catch (error) {
    dispatch(comparismFailure(error.message));
  } finally {
    dispatch(comparing(false));
  }
};

export { fetchLogsRequest, fetchLogRequest };
