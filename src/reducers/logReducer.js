import TYPES from "../actions/constants";

const {
  FETCHING_LOGS,
  FETCHING_LOG,
  FETCH_LOGS_SUCCESS,
  FETCH_LOGS_FAILURE,
  FETCH_LOG_SUCCESS,
  FETCH_LOG_FAILURE,
} = TYPES;

const initialState = {
  fetchingLogs: false,
  fetchingLog: false,
  logs: [],
  log: {},
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_LOGS:
      return {
        ...state,
        fetchingLogs: action.bool,
      };
    case FETCHING_LOG:
      return {
        ...state,
        fetchingLog: action.bool,
      };
    case FETCH_LOGS_SUCCESS:
      return {
        ...state,
        logs: action.logs,
      };
    case FETCH_LOGS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case FETCH_LOG_SUCCESS:
      return {
        ...state,
        log: action.logs,
      };
    case FETCH_LOG_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
