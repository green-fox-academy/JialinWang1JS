import React from 'react'
import logo from './logo.svg'
import './App.css'
import { createStore } from 'redux'

const initState = {
	tagList: []
}
const store = createStore(tagReducer)

function tagReducer(state = initState, action) {
	if (action.type === 'ADD_TAG') {
		if (state.tagList.indexOf(action.tag) === -1) {
			return {
				tagList: [...state.tagList, action.tag]
			}
		}
	} else if (action.type === 'REMOVE_TAG') {
		if (state.tagList.indexOf(action.tag) !== -1) {
			return {
				tagList: state.tagList.filter(tag => tag !== action.tag)
			}
		}
	} else if (action.type === 'REMOVE_TAGS') {
		return {
			tagList: []
		}
	}
	return state
}
// const initState = {
// 	counter: 0,
// 	tags: []
// }
// const store = createStore(reducer)

// function reducer(state = initState, action) {
// 	if (action.type === 'SET') {
// 		return {
// 			...state,
// 			counter: action.amount
// 		}
// 	} else if (action.type === 'INCREASE') {
// 		return {
// 			...state,
// 			counter: action.amount ? state.counter + action.amount : ++state.counter
// 		}
// 	} else if (action.type === 'RESET') {
// 		return {
// 			...state,
// 			counter: 0
// 		}
// 	} else if (action.type === 'DECREASE') {
// 		return {
// 			...state,
// 			counter: action.amount ? state.counter - action.amount : --state.counter
// 		}
// 	}
// 	return state
// }

function App() {
	store.subscribe(() => {
		console.log(store.getState().tagList)
	})

	// store.dispatch({type: 'SET', amount: 6})
	// store.dispatch({type: 'INCREASE'})
	// store.dispatch({type: 'INCREASE', amount: 2})
	// store.dispatch({type: 'RESET'})
	// store.dispatch({type: 'INCREASE'})
	// store.dispatch({type: 'DECREASE', amount: 4})
	store.dispatch({ type: 'ADD_TAG', tag: 'blue' })
	store.dispatch({ type: 'ADD_TAG', tag: 'bold' })
	store.dispatch({ type: 'ADD_TAG', tag: 'hipster' })
	store.dispatch({ type: 'REMOVE_TAG', tag: 'blue' })
	store.dispatch({ type: 'ADD_TAG', tag: 'bold' })
	store.dispatch({ type: 'REMOVE_TAGS' })
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
