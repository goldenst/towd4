import {
  CALL_LIST_REQUEST,
  CALL_LIST_SUCCESS,
  CALL_LIST_FAIL,
  CALL_DETAIL_FAIL,
  CALL_DETAIL_REQUEST,
  CALL_DETAIL_SUCCESS,
} from '../constants/callConstants';

export const callListReducer = (state = { calls: [] }, action) => {
  switch (action.type) {
    case CALL_LIST_REQUEST:
      return { loading: true, calls: [] };
    case CALL_LIST_SUCCESS:
      return { loading: false, calls: action.payload };
    case CALL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const callDetailReducer = (state = { call: [] }, action) => {
  switch (action.type) {
    case CALL_DETAIL_REQUEST:
      return { loading: true, ...state };
    case CALL_DETAIL_SUCCESS:
      return { loading: false, call: action.payload };
    case CALL_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
