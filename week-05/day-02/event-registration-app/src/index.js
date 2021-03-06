import { Provider } from 'react-redux'
import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const initState = {
	firstName: '',
	lastName: '',
	emailAddress: ''
}

function reducer(state = initState, action) {

	if (action.type === 'ADD') {
		return {
			firstName: action.strArray[0],
			lastName: action.strArray[1],
			emailAddress: action.strArray[2]
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
