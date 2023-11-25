import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from "redux-logger";
import rootReducer from '../store/Reducers';
import rootSaga from '../store/Sagas';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;
