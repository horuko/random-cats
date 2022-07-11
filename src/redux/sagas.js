import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../api';
import { ACTIONS as reducersActions } from './reducers';

export const ACTIONS = {
	catsSearch: '[CATS] Search'
};
function *fetchCats({ payload }) {
	const { limit, page } = payload;

	try {
		const data = yield call(Api.fetchCats, { limit, page });

		yield put({type: reducersActions.catsFetchedOk, data: { cats: data, currentPage: { limit, page }} });
	} catch (error) {
		yield put({type: reducersActions.catsFetchedFail, error })
	}
}

function *saga() {
	yield takeLatest(ACTIONS.catsSearch, fetchCats);
}

export default saga;