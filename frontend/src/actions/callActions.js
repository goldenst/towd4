import axios from 'axios'
import {
  CALL_LIST_REQUEST,
  CALL_LIST_SUCCESS,
  CALL_LIST_FAIL,
  CALL_DETAIL_REQUEST,
  CALL_DETAIL_SUCCESS,
  CALL_DETAIL_FAIL
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
