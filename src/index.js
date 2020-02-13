import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './containers/App/index';
// redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reducers } from './containers/App/reducer';
// redux-saga
import createSagaMiddleware from 'redux-saga'
import catSaga from './containers/App/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// help me use redux devtools
const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// basic reducer
const store = createStore(
    reducers, 
    composeEnhancer(applyMiddleware(sagaMiddleware)), 
);

const AppWrapper = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

// run saga
sagaMiddleware.run(catSaga);

ReactDOM.render(<AppWrapper />, document.getElementById('root'));