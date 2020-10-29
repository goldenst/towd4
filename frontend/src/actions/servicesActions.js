import axios from 'axios';
import {
  SERVICES_LIST_REQUEST,
  SERVICES_LIST_SUCCESS,
  SERVICES_LIST_FAIL,
  SERVICES_DETAIL_REQUEST,
  SERVICES_DETAIL_SUCCESS,
  SERVICES_DETAIL_FAIL,
  SERVICES_DELETE_REQUEST,
  SERVICES_DELETE_SUCCESS,
  SERVICES_DELETE_FAIL,
  SERVICES_CREATE_SUCCESS,
  SERVICES_CREATE_REQUEST,
  SERVICES_CREATE_FAIL
} from '../constants/servicesConstants';

export const listServices = () => async (dispatch) => {
  try {
    dispatch({ type: SERVICES_LIST_REQUEST });

    const { data } = await axios.get('/api/v1/services');

    dispatch({
      type: SERVICES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SERVICES_LIST_FAIL,
      payload:
        error.responce && error.responce.data.message
          ? error.responce.data.message
          : error.message,
    });
  }
};

export const listServicesDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SERVICES_DETAIL_REQUEST });

    const { data } = await axios.get(`/api/v1/services/${id}`);

    dispatch({
      type: SERVICES_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SERVICES_DETAIL_FAIL,
      payload:
        error.responce && error.responce.data.message
          ? error.responce.data.message
          : error.message,
    });
  }
};

//-------------------------- DELETE SERVICE

export const deleteService = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: SERVICES_DELETE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
    await axios.delete(`/api/v1/services/${id}`, config);
  
      dispatch({ type: SERVICES_DELETE_SUCCESS});
    } catch (error) {
      console.log(error)
      dispatch({
        type: SERVICES_DELETE_FAIL,
        payload:
          error.responce && error.responce.data.message
            ? error.responce.data.message
            : error.message,
      });
    }
  };
  

  //-------------------------- CREATE SERVICE

export const createService = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SERVICES_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

  const { data } = await axios.post(`/api/v1/services`, {}, config);

    dispatch({ 
      type: SERVICES_CREATE_SUCCESS,
      payload: data
    });
  } catch (error) {
    console.log(error)
    dispatch({
      type: SERVICES_CREATE_FAIL,
      payload:
        error.responce && error.responce.data.message
          ? error.responce.data.message
          : error.message,
    });
  }
};