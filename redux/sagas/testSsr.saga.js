import { call, put, takeEvery } from 'redux-saga/effects';
import {testSsrSuccess,testSsrError} from '../action/testSsr.action';
import { testSsrApi } from '../serives';
import { TEST_SSR } from '../types';

function* fetchBanners() {
    try {
        const testSsr = yield call(testSsrApi);
        yield put(testSsrSuccess(testSsr));
      } catch (e) {
        yield put(testSsrError(e));
      }
}

export default function* testSsrSaga() {
    yield takeEvery(TEST_SSR.FETCH, fetchBanners)
}