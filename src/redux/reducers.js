export const ACTIONS = {
	catsFetchedOk: '[CATS][ok] Search fetched',
	catsFetchedFail: '[CATS][error] Search fetched',
	selectCat: '[CATS][detail] select',
	adoptCat: '[CATS][detail] Adopt cat',
};

export default (state = { cats: [], currentPage: {}, selectedCat: null }, action) => {
	console.log(action)
	switch (action.type) {
		case ACTIONS.catsFetchedOk:
			/** TODO: estado de carga */
			/** TOOD: estado de error */
			if (action.data.currentPage.page > 1) {
				return {
					...state,
					...{
						cats: [...state.cats, ...action.data.cats],
						currentPage: {...action.data.currentPage}
					}
				};
			}
			return {
				...state,
				...{
					cats: [...action.data.cats],
					currentPage: {...action.data.currentPage}
				}
			};
	
		case ACTIONS.selectCat:
			return {
				...state,
				...{
					selectedCat: action.data.selectedCat
				}
			};

		case ACTIONS.adoptCat:
			return {
				...state,
				cats: state.cats.map((cat) => {
					if (cat.id === action.data.adoptedCat.id) {
						return {...cat, ...action.data.adoptedCat}
					}
					return cat;
				})
			};
			
		default:
			break;
	}
	return state;
}