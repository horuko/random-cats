export const ACTIONS = {
	catsFetchedOk: '[CATS][ok] Search fetched',
	catsFetchedFail: '[CATS][error] Search fetched',
};

export default (state = { cats: [], currentPage: {}}, action) => {

	switch (action.type) {
		case ACTIONS.catsFetchedOk:
			/** TODO: pagianción */
			return action.data;
	
		default:
			break;
	}

	return state;
}