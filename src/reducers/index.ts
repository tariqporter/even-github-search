import { Actions } from '../actions';
import initialState from './initialState';

export default (state = initialState, action: any) => {
	
	switch (action.type) {
		case Actions.UPDATE_SEARCH_RESULTS:
			const { page, searchResults, totalCount } = action.payload;
			return {
				...state,
				page,
				searchResults,
				totalCount
			};
		case Actions.SEARCH_RESULTS_LOADING:
			const s = { ...state, loading: action.payload.loading };
			return s;
		case Actions.ON_FIELD_CHANGE:
			console.log(state, action)
			return { ...state, [action.payload.name]: action.payload.value };
		default:
			return state;
	}
}