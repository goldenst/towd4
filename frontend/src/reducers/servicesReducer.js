import {
  SERVICES_LIST_REQUEST,
  SERVICES_LIST_SUCCESS,
  SERVICES_LIST_FAIL,
  SERVICES_DETAIL_FAIL,
  SERVICES_DETAIL_REQUEST,
  SERVICES_DETAIL_SUCCESS,
  SERVICES_DELETE_REQUEST,
  SERVICES_DELETE_SUCCESS,
  SERVICES_DELETE_FAIL,
  SERVICES_CREATE_REQUEST,
  SERVICES_CREATE_SUCCESS,
  SERVICES_CREATE_FAIL,
  SERVICES_CREATE_RESET,
} from '../constants/servicesConstants';

export const servicesListReducer = (state = { services: [] }, action) => {
  switch (action.type) {
    case SERVICES_LIST_REQUEST:
      return { loading: true, services: [] };
    case SERVICES_LIST_SUCCESS:
      return { loading: false, services: action.payload };
    case SERVICES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const serviceDetailReducer = (state = { service: [] }, action) => {
  switch (action.type) {
    case SERVICES_DETAIL_REQUEST:
      return { loading: true, ...state };
    case SERVICES_DETAIL_SUCCESS:
      return { loading: false, service: action.payload };
    case SERVICES_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const serviceDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SERVICES_DELETE_REQUEST:
      return { loading: true };
    case SERVICES_DELETE_SUCCESS:
      return { loading: false, success: true };
    case SERVICES_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const serviceCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SERVICES_CREATE_REQUEST:
      return { loading: true };
    case SERVICES_CREATE_SUCCESS:
      return { loading: false, success: true, service: action.payload };
    case SERVICES_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case SERVICES_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
