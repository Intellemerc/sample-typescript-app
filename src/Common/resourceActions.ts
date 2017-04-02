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
export interface IResourceActions<T extends BaseModel> {
	getAction: (resourceId: number) => Action;
	putAction: (resource: T) => Action;
	postAction: (resource: T) => Action;
	deleteAction: (resourceId: number) => Action;
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
    /**
     * gets a list of all available actions for a given resource
     */
    const getActions = (): IResourceActions<T> => {
        return {
            /**
             * resourceId
             */
            getAction: (resourceId: number) => {
                return {
                    type: GET,
                    payload: {
                        resourceType: ctor.name,
                        resourceId
                    }
                };
            },
            putAction: (resource: T) => {
                return {
                    type: PUT,
                    payload: {
                        resourceType: ctor.name,
                        resource
                    }
                };
            },
            postAction: (resource: T) => {
                return {
                    type: POST,
                    payload: {
                        resourceType: ctor.name,
                        resource
                    }
                };
            },
            deleteAction: (resourceId: number) => {
                return {
                    type: DELETE,
                    payload: {
                        resourceType: ctor.name,
                        resourceId
                    }
                };
            }
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