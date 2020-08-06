import TYPES from "../actions/constants";

const {
  PROCESSING,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  USER_LOGOUT,
  SIGNING_OUT,
} = TYPES;

const initialState = {
  authenticated: false,
  processing: false,
  signingOut: false,
  user: {},
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROCESSING:
      return {
        ...state,
        processing: action.bool,
      };
    case SIGNING_OUT:
      return {
        ...state,
        signingOut: action.bool,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        authenticated: true,
        user: action.user,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case USER_LOGOUT:
      return {
        ...state,
        authenticated: false,
      };
    default:
      return state;
  }
};
