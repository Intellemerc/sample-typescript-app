// import { Action } from 'redux';

// const API_CALL_IN_PROGRESS = 'FETCHING';
// const API_CALL_FINISHED = 'FETCHED';
// const API_CALL_ERROR = 'FAILED';
// const API_CALL_UPATE_PAGE = 'PAGE_UPDATED';

// const API_GET_LIST_PARTIAL = 'API/GET_LIST_';
// const API_GET_PARTIAL = 'API/GET';
// const API_PUT_PARTIAL = 'API/PUT';
// const API_POST_PARTIAL = 'API/POST';
// const API_DELETE_PARTIAL = 'API/DELETE';
// const API_PAGE_UPDATE =  `API/API_PAGE_`;

// export const GETLIST = 'API/FETCH_LIST_REQUESTED';
// export const GET = 'API/FETCH_REQUESTED';
// export const PUT = 'API/PUT_REQUESTED';
// export const POST = 'API/POST_REQUESTED';
// export const DELETE = 'API/DELETE_REQUESTED';


// const getActionGen =
//     (action: string): (resource: string) => APIActionTypes =>
//         (resource: string): APIActionTypes => {
//             return {
//                 fetching: `${action}_${resource}_${API_CALL_IN_PROGRESS}`,
//                 fetched: `${action}_${resource}_${API_CALL_FINISHED}`,
//                 failed: `${action}_${resource}_${API_CALL_ERROR}`,
//                 updatePage: `${action}_${resource}_${API_CALL_UPATE_PAGE}`
//             };
//         };
// const getAction =
//     (action: string): (resource: string, resourceId: number) => Function =>
//         (resource: string, resourceId: number): (data: IAPIParams) => IAPIAction =>
//             (data?: IAPIParams): IAPIAction => {
//                 return {
//                     type: action,
//                     payload: {
//                         resource: resource,
//                         data: data
//                     }
//                 };
//             };

// const getBulkAction =
//     (action: string): (resource: string) => any =>
//         (resource: string): (data?: IBulkApiParams) => IAPIAction =>
//             (data?: IBulkApiParams): IAPIAction => {
//                 return {
//                     type: action,
//                     payload: {
//                         resource: resource,
//                         data: data
//                     }
//                 };
//             };

// const getUpdatePageAction =
//     (resource: string): (data?: IBulkApiParams) => IPayloadAction =>
//         (data?: IBulkApiParams): IPayloadAction => {
//         return {
//             type: API_PAGE_UPDATE,
//             payload: data
//         };
//     };

// export default {
//     actions: {
//         getList: getBulkAction(GETLIST),
//         updatePage: getUpdatePageAction,
//         get: getAction(GET),
//         put: getAction(PUT),
//         post: getAction(POST),
//         delete: getAction(DELETE),
//     },
//     actionNames: {
//         getListActions: getActionGen(API_GET_LIST_PARTIAL),
//         getActions: getActionGen(API_GET_PARTIAL),
//         putActions: getActionGen(API_PUT_PARTIAL),
//         postActions: getActionGen(API_POST_PARTIAL),
//         deleteActions: getActionGen(API_DELETE_PARTIAL),
//         updatePage: getActionGen(API_CALL_UPATE_PAGE)
//     }
// };