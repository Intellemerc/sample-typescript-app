import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './rootReducer';
import sagaRoot from './rootSaga';

const sagaMiddleware = createSagaMiddleware( /* {sagaMonitor} */);

const devTools = window.devToolsExtension ?
    compose(applyMiddleware(sagaMiddleware), window.devToolsExtension())
    : applyMiddleware(sagaMiddleware);

export const store = createStore(
    rootReducer,
    devTools
);

export const runSaga = () => {
    sagaMiddleware.run(sagaRoot);
};