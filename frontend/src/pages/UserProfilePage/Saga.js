import { takeLatest, take, put, select } from 'redux-saga/effects';
import Api from '../../Api';
import { EVENTS_FEED_SUCCESS, EVENTS_FEED_FAIL, EVENTS_FEED_FETCH, FETCH_EVENT_CHANGES } from './Actions';
import { assign, isEmpty } from "ramda";
import { getUserInfo } from '../../components/FBLogin/Reducer';
import { getEvents } from './Reducer';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* eventFeedPageFetchSaga(action) {
  //yield takeLatest(FETCH_EVENT_CHANGES, fetchEventChanges);
  yield takeLatest(EVENTS_FEED_FETCH, fetchEvents);
  yield take(EVENTS_FEED_FETCH);
  yield takeLatest(FETCH_EVENT_CHANGES, fetchEventChanges);
}

function* fetchEvents() {
  try {
    const api = new Api();
    const events = yield api.getEvents();
    const loggedUser = yield select(getUserInfo);

    yield put({
      type: EVENTS_FEED_SUCCESS,
      payload: events,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: EVENTS_FEED_FAIL,
    });
  }
}

function* fetchEventChanges() {
  try {
    yield put({
      type: EVENTS_FEED_FETCH,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: EVENTS_FEED_FAIL,
    });
  }
}


export default eventFeedPageFetchSaga;
