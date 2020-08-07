import axios from "axios";
import TYPES from "../constants";

const {
  FETCHING_LOG,
  FETCHING_LOGS,
  FETCH_LOGS_SUCCESS,
  FETCH_LOGS_FAILURE,
  FETCH_LOG_SUCCESS,
  FETCH_LOG_FAILURE,
} = TYPES;

const fetchingLog = (bool) => ({
  type: FETCHING_LOG,
  bool,
});

const fetchingLogs = (bool) => ({
  type: FETCHING_LOGS,
  bool,
});

const fetchLogSuccess = (log) => ({
  type: FETCH_LOG_SUCCESS,
  log,
});

const fetchLogFailure = (error) => ({
  type: FETCH_LOG_FAILURE,
  error,
});

const fetchLogsSuccess = (logs) => ({
  type: FETCH_LOGS_SUCCESS,
  logs,
});

const fetchLogsFailure = (error) => ({
  type: FETCH_LOGS_FAILURE,
  error,
});

const fetchLogsRequest = (userId) => async (dispatch) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  dispatch(fetchingLogs(true));
  try {
    const url = `${BASE_URL}/users/${userId}/logs`;
    const response = await axios.get(url);
    dispatch(fetchLogsSuccess(response.data.data));
  } catch (error) {
    dispatch(fetchLogsFailure(error.message));
  } finally {
    dispatch(fetchingLogs(false));
  }
};

const fetchLogRequest = (userId, id) => async (dispatch) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  dispatch(fetchingLog(true));
  try {
    const url = `${BASE_URL}/users/${userId}/logs/${id}`;
    const response = await axios.get(url);
    dispatch(fetchLogSuccess(response.data.data.data));
  } catch (error) {
    dispatch(fetchLogFailure(error.message));
  } finally {
    dispatch(fetchingLog(false));
  }
};

export { fetchLogsRequest, fetchLogRequest };
