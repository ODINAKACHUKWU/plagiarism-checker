import TYPES from "../actions/constants";

const { COMPARING, COMPARISM_SUCCESS, COMPARISM_FAILURE } = TYPES;

const initialState = {
  comparing: false,
  result: {},
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COMPARING:
      return {
        ...state,
        processing: action.bool,
      };
    case COMPARISM_SUCCESS:
      return {
        ...state,
        result: action.result,
      };
    case COMPARISM_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
