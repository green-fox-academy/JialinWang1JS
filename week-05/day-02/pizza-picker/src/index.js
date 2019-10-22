import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const initState = {
	base: 'B1',
	topping: [],
	needCut: true,
	comment: ''
}

function reducer(state = initState, action) {
	if (action.type === 'BASE') {
		console.log(action)

		return {
			...state,
			base: action.option
		}
	} else if (action.type === 'ADD_TOPPING') {
		return {
			...state,
			topping: [...state.topping, action.option]
		}
	} else if (action.type === 'REMOVE_TOPPING') {
		return {
			...state,
			topping: state.topping.filter(topping => topping !== action.option)
		}
	} else if (action.type === 'CUT') {
		return {
			...state,
			needCut: action.option
		}
	} else if (action.type === 'COMMENT') {
		return {
			...state,
			comment: action.option
		}
	}
	return state
}

const store = createStore(reducer)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
