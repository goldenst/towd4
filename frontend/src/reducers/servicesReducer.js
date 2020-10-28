import {
    SERVICES_LIST_REQUEST,
    SERVICES_LIST_SUCCESS,
    SERVICES_LIST_FAIL,
    SERVICES_DETAIL_FAIL,
    SERVICES_DETAIL_REQUEST,
    SERVICES_DETAIL_SUCCESS,
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
  