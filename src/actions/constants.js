import keymirror from "keymirror";

const TYPES = keymirror({
  PROCESSING: null,
  SIGNING_OUT: null,
  AUTH_SUCCESS: null,
  AUTH_FAILURE: null,
  USER_LOGOUT: null,
  COMPARING: null,
  COMPARISM_SUCCESS: null,
  COMPARISM_FAILURE: null,
  FETCHING_LOGS: null,
  FETCH_LOGS_SUCCESS: null,
  FETCH_LOGS_FAILURE: null,
  FETCHING_LOG: null,
  FETCH_LOG_SUCCESS: null,
  FETCH_LOG_FAILURE: null,
});

export default TYPES;
