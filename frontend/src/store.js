import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { callDetailReducer, callListReducer } from './reducers/callsReducer';
import {
  serviceDetailReducer,
  servicesListReducer,
  serviceDeleteReducer,
  serviceCreateReducer,
} from './reducers/servicesReducer';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
} from './reducers/userReducers';

const reducer = combineReducers({
  callList: callListReducer,
  callDetails: callDetailReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  serviceList: servicesListReducer,
  serviceDetail: serviceDetailReducer,
  serviceDelete: serviceDeleteReducer,
  serviceCreate: serviceCreateReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initalState = {
  userLogin: { userinfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
