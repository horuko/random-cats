import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../api';
function *fetchCats({ payload }) {
	const { limit, page } = payload;

	try {
		const data = yield call(Api.fetchCats, { limit, page });

		yield put({type: '[CATS][ok] Search fetched', data: { cats: data, currentPage: { limit, page }} });
	} catch (error) {
		yield put({type: '[CATS][error] Search fetched', error })
	}
}

function *saga() {
	yield takeLatest('[CATS] Search', fetchCats);
}

export default saga;