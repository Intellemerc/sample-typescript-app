import { combineReducers } from 'redux';

import resourceReducer from './Common/resourceReducer';
import Order from './Resources/Order';

export interface IAppState {
    Order: Order;
};

const reducers = {
    Order: resourceReducer(Order)
};
const rootApp = combineReducers(reducers);

export default rootApp;