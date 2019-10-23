const initState = {
  users:[],
	loading: false
}

function reducer(state = initState, action) {
	if (action.type === FETCH_TEST_DATA) {
		return {
			...state,
			loading: true
		}
	} else if (action.type === FETCH_TEST_DATA_SUCCESS) {
    return {
      ...state,
      users:action.users,
      loading:false
    }
  }
	return state
}

function fetchJPData() {
	return dispatch => {
		dispatch({ type: FETCH_TEST_DATA })
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(data => dispatch({ type: FETCH_TEST_DATA_SUCCESS, users: data }))
	}
}

const FETCH_TEST_DATA = 'FETCH_TEST_DATA'
const FETCH_TEST_DATA_SUCCESS = 'FETCH_TEST_DATA_SUCCESS'

export { reducer, fetchJPData }
