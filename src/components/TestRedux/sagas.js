import { take, fork, call, put, delay } from 'redux-saga/effects';
import { ASYNC_CHANGE_TITLE } from './constants';
import { changeAction } from './actions';

// The worker
function* changeTitleWorker(text) {
  const newText = yield new Promise((resolve) => {
    setTimeout(() => {
      resolve(`这是异步 action ${text}`);
    }, 2000);
  })
  yield put(changeAction(newText));
}

// The watcher
export default function* watchChangeTitle() {
  while(true) {
    const action = yield take(ASYNC_CHANGE_TITLE);
    yield fork(changeTitleWorker, action.text);
  }
}


