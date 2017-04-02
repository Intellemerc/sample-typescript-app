import { combineReducers } from 'redux';

import * as ResReducer from './Common/resourceReducer';
import { Order } from './Resources/Order';

export interface IAppState {
    Order: ResReducer.IResourceEntry<Order>;
};
const reducers = {
    Order: ResReducer.resourceReducer(Order),
};

export default combineReducers<IAppState>(reducers);