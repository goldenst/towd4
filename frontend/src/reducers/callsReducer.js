import {
  CALL_LIST_REQUEST,
  CALL_LIST_SUCCESS,
  CALL_LIST_FAIL,
  CALL_DETAIL_FAIL,
  CALL_DETAIL_REQUEST,
  CALL_DETAIL_SUCCESS,
  CALL_DELETE_REQUEST,
  CALL_DELETE_SUCCESS,
  CALL_DELETE_FAIL,
  CALL_UPDATE_FAIL,
  CALL_UPDATE_SUCCESS,
  CALL_UPDATE_REQUEST,
  CALL_CREATE_RESET,
  CALL_CREATE_FAIL,
  CALL_CREATE_SUCCESS,
  CALL_CREATE_REQUEST,
  CALL_UPDATE_RESET
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

export const callDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CALL_DELETE_REQUEST:
      return { loading: true };
    case CALL_DELETE_SUCCESS:
      return { loading: false, success: true };
    case CALL_DELETE_FAIL :
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const callCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CALL_CREATE_REQUEST:
      return { loading: true };
    case CALL_CREATE_SUCCESS:
      return { loading: false, success: true, call: action.payload };
    case CALL_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case CALL_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const callUpdateReducer = (state = {call: {}}, action) => {
  switch (action.type) {
    case CALL_UPDATE_REQUEST:
      return { loading: true };
    case CALL_UPDATE_SUCCESS:
      return { loading: false, success: true, call: action.payload };
    case CALL_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CALL_UPDATE_RESET:
      return {
        service: {}
      };
    default:
      return state;
  }
};


