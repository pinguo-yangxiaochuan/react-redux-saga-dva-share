import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import ContainerCom from './ContainerCom';
import reducers from './reducers';
import rootSaga from './sagas';

// 使用 saga 处理异步 action
const sagaMiddleware = createSagaMiddleware();
const  store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  console.log('store更新了');
})

export default () => {
  return (
    <Provider store={store}>
      <ContainerCom />
    </Provider>
  )
}