import BaseModel from '../Resources/BaseModel';
import { Action } from 'redux';

const API_CALL_IN_PROGRESS = 'FETCHING';
const API_CALL_FINISHED = 'FETCHED';
const API_CALL_ERROR = 'FAILED';

// const GETLIST = 'API/FETCH_LIST_REQUESTED';
export const GET = 'API/FETCH_REQUESTED';
export const PUT = 'API/PUT_REQUESTED';
export const POST = 'API/POST_REQUESTED';
export const DELETE = 'API/DELETE_REQUESTED';

export enum APIAction {
    GET,
    PUT,
    POST,
    DELETE
}
export interface IAPIActionTypes {
    fetching: string;
    fetched: string;
    failed: string;
}
export interface IResourceAction<T> extends Action {
    payload: {
        resourceType: string,
        resource: T
    };
}
export interface IResourceByIdAction extends Action {
    payload: {
        resourceType: string,
        resourceId: string
    };
}
export type resourceFnById = (resourceId: string) => IResourceByIdAction;
export type resourceFnByResource = <T extends BaseModel>(resource: T) => IResourceAction<T>;

export interface IResourceActionList {
	getAction: resourceFnById;
	putAction: resourceFnByResource;
	postAction: resourceFnByResource;
	deleteAction: resourceFnById;
}

export default <T extends BaseModel>(ctor: { new (): T }) => {
    const getActionNames = (): () => IAPIActionTypes =>
        (): IAPIActionTypes => {
            return {
                fetching: `API/${ctor.name}_${API_CALL_IN_PROGRESS}`, // API/Orders/FETCHING
                fetched: `API/${ctor.name}_${API_CALL_FINISHED}`, // API/Orders/FETCHED
                failed: `API/${ctor.name}_${API_CALL_ERROR}`, // API/Orders/FAILED
            };
    };
    const getResourceAction = (action: string) => (resource: T): IResourceAction<T>  => {
        return {
            type: action,
            payload: {
                resourceType: ctor.name,
                resource
            }
        };
    };
    const getResourceByIdAction = (action: string) => (resourceId: string): IResourceByIdAction  => {
        return {
            type: action,
            payload: {
                resourceType: ctor.name,
                resourceId: resourceId
            }
        };
    };
    /**
     * gets a list of all available actions for a given resource
     */
    const getActions = (): IResourceActionList => {
        return {
            /**
             * resourceId
             */
            getAction: getResourceByIdAction(GET),
            putAction: getResourceAction(PUT),
            postAction: getResourceAction(POST),
            deleteAction: getResourceByIdAction(DELETE),
        };
    };
    return {
        actions: getActions(),
        /**
         * usage like resourceObj.getActions.fetching returns the string API/GET_Orders/FETCHING. 
         * for ability to provide custom reducers
         */ 
        actionNames: getActionNames()
    };
};