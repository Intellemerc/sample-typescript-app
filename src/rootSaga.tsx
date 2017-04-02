import apiSaga from './Common/apiSaga';

function* rootSaga(): any {
    yield [
        apiSaga()
    ];
}

export default rootSaga;