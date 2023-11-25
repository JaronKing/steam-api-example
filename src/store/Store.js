import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from "redux-logger";
import rootReducer from '../store/Reducers'; // Import your root reducer
import rootSaga from '../store/Sagas'; // Import your root saga

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;
