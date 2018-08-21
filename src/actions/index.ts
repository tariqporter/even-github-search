
export const Actions = {
	SEARCH_GITHUB: 'SEARCH_GITHUB',
	SEARCH_RESULTS_LOADING: 'SEARCH_RESULTS_LOADING',
	UPDATE_SEARCH_RESULTS: 'UPDATE_SEARCH_RESULTS',
	ON_FIELD_CHANGE: 'ON_FIELD_CHANGE'
};

export const searchGitHubAction = (obj: any) => {
	const { searchValue, starValue, license, includeForked, page } = obj;
	return (dispatch: any) => {
		dispatch(searchResultsLoadingAction(true));
		let qualifiers = starValue ? `+stars:${starValue}` : '';
		qualifiers += includeForked ? '+fork:true' : '';
		qualifiers += license ? `+license:${license.toLowerCase()}` : '';
		const url = `https://api.github.com/search/repositories?q=${searchValue}${qualifiers}&page=${page}`;
		fetch(url)
		.then(handleErrors)
		.then(x => x.json())
		.then(x => {
			new Promise((resolve, reject) => {
				setTimeout(() => resolve(x), 1000);
			})
			.then(y => { console.log(y); return y })
			.then((y: any) => dispatch(updateSearchResultsAction(y.items, y.total_count, page)))
			.then(y => dispatch(searchResultsLoadingAction(false)))
			
		})
		.catch(err => console.log(err));
	}
}

export const updateSearchResultsAction = (searchResults: any[], totalCount: number, page: number) => ({
  type: Actions.UPDATE_SEARCH_RESULTS,
  payload: {
	  searchResults,
	  page,
	  totalCount
  }
})

export const searchResultsLoadingAction = (loading: boolean) => ({
  type: Actions.SEARCH_RESULTS_LOADING,
  payload: {
	  loading
  }
})

export const onChangeAction = (name: string, value: string) => ({
  type: Actions.ON_FIELD_CHANGE,
  payload: {
	  name,
	  value
  }
})

function handleErrors(response: any) {
    if (!response.ok) {
		console.log(response);
        throw Error(response.statusText);
    }
    return response;
}