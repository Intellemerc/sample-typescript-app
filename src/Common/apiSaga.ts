import { put, fork, takeEvery, call } from 'redux-saga/effects';

import * as Actions from './resourceActions';
import API from './api';

function* apiFetchCalled({payload: {resourceType, resourceId}}: Actions.IResourceByIdAction) {
    const actionNames = Actions.getActionNames(resourceType);
    const result = yield call(API.get, resourceType, resourceId);
    yield put({type: actionNames.fetched, payload: result});
}

function* watch() {
    yield fork(takeEvery, Actions.GET, apiFetchCalled);
}

export default function* () {
    yield [
        watch()
    ];
};