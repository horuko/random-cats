export default (state = { cats: [], currentPage: {}}, action) => {

	switch (action.type) {
		case '[CATS][ok] Search fetched':
			/** TODO: pagianción */
			return action.data;
	
		default:
			break;
	}

	return state;
}