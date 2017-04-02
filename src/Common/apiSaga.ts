import { put, fork, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as Actions from './resourceActions';

function* apiFetchCalled({payload: {resourceType, resourceId}}: Actions.IResourceByIdAction) {
   
    yield delay(3000);
    yield put({type: 'testAPIFetch', payload: {resourceType, resourceId}});
}

function* watch() {
    yield fork(takeEvery, Actions.GET, apiFetchCalled);
}

export default function* () {
    yield [
        watch()
    ];
};