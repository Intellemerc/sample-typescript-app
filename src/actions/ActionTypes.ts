import { Action } from 'redux';

export interface Action<T> extends Action {
    type: string;
    payload: T;
}