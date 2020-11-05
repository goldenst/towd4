import axios from 'axios'
import {
  CALL_LIST_REQUEST,
  CALL_LIST_SUCCESS,
  CALL_LIST_FAIL,
  CALL_DETAIL_REQUEST,
  CALL_DETAIL_SUCCESS,
  CALL_DETAIL_FAIL,
  CALL_DELETE_REQUEST,
  CALL_DELETE_SUCCESS,
  CALL_DELETE_FAIL,
  CALL_CREATE_REQUEST,
  CALL_CREATE_SUCCESS,
  CALL_CREATE_FAIL,
  CALL_UPDATE_REQUEST,
  CALL_UPDATE_SUCCESS,
  CALL_UPDATE_FAIL
} from '../constants/callConstants';

export const listCalls = () => async(dispatch) => {
    try {
        dispatch({type: CALL_LIST_REQUEST})

        const { data } = await axios.get('/api/v1/calls')

        dispatch ({
            type: CALL_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch ({
            type: CALL_LIST_FAIL,
            payload: 
                error.responce && error.responce.data.message
                ? error.responce.data.message
                : error.message
        })
    }
};


export const listCallsDetails = (id) => async(dispatch) => {
    try {
        dispatch({type: CALL_DETAIL_REQUEST})

        const { data } = await axios.get(`/api/v1/calls/${id}`)

        dispatch ({
            type: CALL_DETAIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch ({
            type: CALL_DETAIL_FAIL,
            payload: 
                error.responce && error.responce.data.message
                ? error.responce.data.message
                : error.message
        })
    }
};

//-------------------------- DELETE CALL

export const deleteCall = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CALL_DELETE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
    await axios.delete(`/api/v1/calls/${id}`, config);
  
      dispatch({ type: CALL_DELETE_SUCCESS});
    } catch (error) {
      console.log(error)
      dispatch({
        type: CALL_DELETE_FAIL,
        payload:
          error.responce && error.responce.data.message
            ? error.responce.data.message
            : error.message,
      });
    }
  };
  

  //-------------------------- CREATE CALL

export const createCall = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CALL_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

  const { data } = await axios.post(`/api/v1/calls`, {}, config);

    dispatch({ 
      type: CALL_CREATE_SUCCESS,
      payload: data
    });
  } catch (error) {
    console.log(error)
    dispatch({
      type: CALL_CREATE_FAIL,
      payload:
        error.responce && error.responce.data.message
          ? error.responce.data.message
          : error.message,
    });
  }
};

  //-------------------------- UPDATE CALL

  export const updateService = (call) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CALL_UPDATE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
    const { data } = await axios.put(`/api/v1/calls/${call._id}`, call, config);
  
      dispatch({ 
        type: CALL_UPDATE_SUCCESS,
        payload: data
        
      });
    } catch (error) {
      console.log(error)
      dispatch({
        type: CALL_UPDATE_FAIL,
        payload:
          error.responce && error.responce.data.message
            ? error.responce.data.message
            : error.message,
      });
    }
  };
