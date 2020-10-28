import axios from 'axios'
import {
  SERVICES_LIST_REQUEST,
  SERVICES_LIST_SUCCESS,
  SERVICES_LIST_FAIL,
  SERVICES_DETAIL_REQUEST,
  SERVICES_DETAIL_SUCCESS,
  SERVICES_DETAIL_FAIL
} from '../constants/servicesConstants';

export const listServices = () => async(dispatch) => {
    try {
        dispatch({type: SERVICES_LIST_REQUEST})

        const { data } = await axios.get('/api/v1/services')

        dispatch ({
            type: SERVICES_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch ({
            type: SERVICES_LIST_FAIL,
            payload: 
                error.responce && error.responce.data.message
                ? error.responce.data.message
                : error.message
        })
    }
};


export const listServicesDetails = (id) => async(dispatch) => {
    try {
        dispatch({type: SERVICES_DETAIL_REQUEST})

        const { data } = await axios.get(`/api/v1/services/${id}`)

        dispatch ({
            type: SERVICES_DETAIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch ({
            type: SERVICES_DETAIL_FAIL,
            payload: 
                error.responce && error.responce.data.message
                ? error.responce.data.message
                : error.message
        })
    }
};
