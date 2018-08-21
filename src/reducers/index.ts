import { Actions } from '../actions';
import initialState from './initialState';
import { createPagination } from './pagination';

export default (state = initialState, action: any) => {
	//console.log(state, action)
	switch (action.type) {
		case Actions.UPDATE_SEARCH_RESULTS:
			const { page, searchResults, totalCount } = action.payload;
			return {
				...state,
				page,
				searchResults,
				totalCount,
				pages: createPagination(page, 30, totalCount)
			};
		case Actions.SEARCH_RESULTS_LOADING:
			return { ...state, loading: action.payload.loading };
		case Actions.ON_FIELD_CHANGE:
			return { ...state, [action.payload.name]: action.payload.value };
		default:
			return state;
	}
}