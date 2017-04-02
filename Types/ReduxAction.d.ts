import { Action } from 'redux';
import BaseModel from '../src/Resources/BaseModel';


export interface IReduxAction<T extends BaseModel> extends Action {
    type: string;
    payload: T;
}
export interface IReduxAction extends Action {
    type: string;
    payload?: any;
}

interface IAPIActionTypes {
    fetching: string;
    fetched: string;
    failed: string;
    updatePage: string;
}