import { combineReducers } from 'redux';
import { IReduxAction } from '../../Types/ReduxAction';
import BaseModel from '../Resources/BaseModel';

// TODO: use generics here?
export default <T extends BaseModel>(ctor: { new (): T }) => {
	const resourceReducer = (state = [], action: IReduxAction<T>) => {
		switch (action.type) {
			case `API_GET_${ctor.name}_FETCHED`:
				return action.payload;
			default:
				return state;
		}
	};

	const loadingReducer = (state = false, action: IReduxAction<T>) => {
		switch (action.type) {
			case `API_GET_${ctor.name}_FETCHING`:
				return true;
			case `API_GET_${ctor.name}_FETCHED`:
				return false;
			default:
				return state;
		}
	};

	const loadedReducer = (state = false, action: IReduxAction<T>) => {
		switch (action.type) {
			case `API_GET_${ctor.name}_FETCHING`:
				return false;
			case `API_GET_${ctor.name}_FETCHED`:
				return true;
			default:
				return state;
		}
	};

	const errorReducer = (state = null, action: IReduxAction<T>) => {
		switch (action.type) {
			case `API_GET_${ctor.name}_FAILURE`:
				return action.payload;
			case `API_GET_${ctor.name}_FETCHED`:
			case `API_GET_${ctor.name}_FETCHING`:
				return null;
			default:
				return state;
		}
	};

	return combineReducers({
		items: resourceReducer,
		isLoading: loadingReducer,
		loaded: loadedReducer,
		error: errorReducer
	});
};
