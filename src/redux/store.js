// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);

export default store;
