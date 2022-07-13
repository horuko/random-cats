import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../api';
import { ACTIONS as reducersActions } from './reducers';

export const ACTIONS = {
	catsSearch: '[CATS] Search',
	selectCat: '[CATS] Select',
};
function* fetchCats({ payload }) {
	const { limit, page } = payload;

	try {
		const data = yield call(Api.fetchCats, { limit, page });

		yield put({
			type: reducersActions.catsFetchedOk,
			data: { cats: data, currentPage: { limit, page } },
		});
	} catch (error) {
		yield put({ type: reducersActions.catsFetchedFail, error });
	}
}

function* selectCat({ payload }) {
	yield put({ type: reducersActions.selectCat, data: payload });
}

function* saga() {
	yield takeLatest(ACTIONS.catsSearch, fetchCats);
	yield takeLatest(ACTIONS.selectCat, selectCat);
}

export default saga;
