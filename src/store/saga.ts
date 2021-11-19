import {
  all,
  call,
  delay,
  fork,
  put,
  race,
  select,
  take,
  takeLatest,
} from "redux-saga/effects";

import {
  fetchPhotosError,
  fetchPhotosStart,
  fetchPhotosSuccess,
} from "../store/slices/photos";
import { increment, decrement, reset } from "../store/slices/counter";

import { fetchPhotos } from "../api/photos";

// Worker Saga: Will be fired when fetchPhotosStart action is dispatched
function* fetchData() {
  try {
    const photos = yield call(fetchPhotos);
    yield put(fetchPhotosSuccess(photos));
  } catch (error) {
    yield put(fetchPhotosError(error));
  }
}

// Watcher Saga: Listens to dispatched fetchPhotosStart actions
function* fetchSaga() {
  yield takeLatest(fetchPhotosStart.type, fetchData);
}

function* countTill20() {
  // Retrieve current count value
  let count = yield select((state) => state.count);

  // do increment until count >= 20
  while (count < 20) {
    yield put(increment());
    count = count + 1;
    yield delay(1000);
  }
}

// Watcher and Worker Saga in one
function* numbersSaga() {
  // instead of while(true), takeEvery or takeLatest can be used
  while (true) {
    yield take(reset.type); // Wait until Reset action (-> Reset Button pressed)

    // Create Race condition
    // -> resolve what ever finishes first ('countTill20' or creating a 'decrement' action)
    const { cancel } = yield race({
      task: call(countTill20),
      cancel: take(decrement.type),
    });

    // When race condition was canceled -> (task decrement.type 'won' the race condition) log whatever
    if (cancel) {
      yield call(console.log, "Automatic count cancelled!");
    }
  }
}

// Root Saga: Spawn all watcher sagas in a non-blocking fashion
function* rootSaga() {
  yield all([
    // Add new sagas by forking them here
    fork(fetchSaga),
    fork(numbersSaga),
  ]);
}
export default rootSaga;
