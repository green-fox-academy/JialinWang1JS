const FETCH_CHAT_DATA = 'FETCH_CHAT_DATA'
const FETCH_CHAT_DATA_SUCCESS = 'FETCH_CHAT_DATA_SUCCESS'

const SEND_CHAT_DATA = 'SEND_CHAT_DATA'
const SEND_CHAT_DATA_SUCCESS = 'SEND_CHAT_DATA_SUCCESS'
const URL = 'https://stream-vanadium.glitch.me/messages'
const initState = {
	sendRecords: [],
	messages: [],
  loading: false,
  loadDone: false,
	sending: false
}

function reducer(state = initState, action) {
	if (action.type === FETCH_CHAT_DATA) {
    return {
      ...state,
			loading: true
		}
	} else if (action.type === FETCH_CHAT_DATA_SUCCESS) {
    console.log(FETCH_CHAT_DATA_SUCCESS)
    return {
      ...state,
			messages: action.messages,
      loading: false,
      loadDone:true
		}
	} else if (action.type === SEND_CHAT_DATA) {
		return {
			...state,
			sending: true
		}
	} else if (action.type === SEND_CHAT_DATA_SUCCESS) {
		console.log('success: ', state.sendRecords, action.sendRecord)

		return {
			...state,
			sendRecords: [...state.sendRecords, action.sendRecord],
			sending: false
		}
	}
	return state
}

function fetchMsgData() {
	return async dispatch => {
		dispatch({ type: FETCH_CHAT_DATA })
		let data = await fetch(URL).then(res => res.json())
		dispatch({ type: FETCH_CHAT_DATA_SUCCESS, messages: data.messages })
	}
}

function sendMsgData(name, msg) {
	return dispatch => {
		let data = {
			user: name,
			text: msg
		}
		console.log(JSON.stringify(data))
		dispatch({ type: SEND_CHAT_DATA })
		fetch(URL, {
			method: 'POST', // or 'PUT'
			body: JSON.stringify(data), // data can be `string` or {object}!
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		})
			.then(res => dispatch({ type: SEND_CHAT_DATA_SUCCESS, sendRecord: { res, recordTime: new Date() } }))
			.catch(errorMsg => console.log(errorMsg))
	}
}
export { reducer, fetchMsgData, sendMsgData }
