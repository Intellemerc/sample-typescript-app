import { combineReducers } from 'redux';
import { IReduxAction } from '../../Types/ReduxAction';
import BaseModel from '../Resources/BaseModel';

import getActionNames from './resourceActions';

export interface IResourceEntry<T extends BaseModel>{
    resource: T;
	isLoaded: boolean;
	isLoading: boolean;
	error?: string;
}
export const resourceReducer =  <T extends BaseModel>(ctor: { new (): T }) => {
	const actionNames = getActionNames(ctor).actionNames();
	const objectReducer = (state = {}, action: IReduxAction<T>) => {
		switch (action.type) {
			case actionNames.fetched:
				return action.payload;
			default:
				return state;
		}
	};

	const loadingReducer = (state = false, action: IReduxAction<T>) => {
		switch (action.type) {
			case actionNames.fetching:
				return true;
			case actionNames.fetched:
				return false;
			default:
				return state;
		}
	};

	const loadedReducer = (state = false, action: IReduxAction<T>) => {
		switch (action.type) {
			case actionNames.fetched:
				return true;
			default:
				return state;
		}
	};

	const errorReducer = (state = null, action: IReduxAction<T>) => {
		switch (action.type) {
			case actionNames.failed:
				return action.payload;
			case actionNames.fetched:
			case actionNames.fetching:
				return null;
			default:
				return state;
		}
	};

	return combineReducers<IResourceEntry<T>>({
		resource: objectReducer,
		isLoading: loadingReducer,
		isLoaded: loadedReducer,
		error: errorReducer
	});
};
