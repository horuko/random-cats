export const ACTIONS = {
	catsFetchedOk: '[CATS][ok] Search fetched',
	catsFetchedFail: '[CATS][error] Search fetched'
};

export default (state = { cats: [], currentPage: {}}, action) => {
	
	switch (action.type) {
		case ACTIONS.catsFetchedOk:
			/** TODO: estado de carga */
			/** TOOD: estado de error */
			if (action.data.currentPage.page > 1) {
				return {
					cats: [...state.cats, ...action.data.cats],
					currentPage: {...action.data.currentPage}
				};
			}
			return {
				cats: [...action.data.cats],
				currentPage: {...action.data.currentPage}
			};
	
		case '':
			
		default:
			break;
	}
	
	return state;
}