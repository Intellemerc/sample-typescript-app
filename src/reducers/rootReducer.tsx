import { combineReducers } from 'redux';

import todos from './todosReducer';

const reducers = {
    todos
};
const rootApp = combineReducers(reducers);

export default rootApp;