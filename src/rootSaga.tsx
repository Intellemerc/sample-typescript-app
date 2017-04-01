import { put } from 'redux-saga/effects';

function* sampleSaga() {
    yield put({ type: 'Test_Saga'});
}

function* rootSaga(): any {
    yield [
        sampleSaga()
    ];
}

export default rootSaga;