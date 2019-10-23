import React, { useState } from 'react'
import { connect } from 'react-redux'
import './App.css'

function App(props) {
	// 	const [base, setBase] = useState('B1')
	// 	const [topping, setTopping] = useState('')
	// 	const [needCut, setNeedCut] = useState(true)
	const [comment, setcomment] = useState('')
	return (
		<div className='App'>
			<select value={props.base} onChange={event => props.addOptionTo('BASE', event.target.value)}>
				<option value='B1'>B1</option>
				<option value='B2'>B2</option>
				<option value='B3'>B3</option>
			</select>
			<p />

			<input
				onChange={event =>
					event.target.checked ? props.addOptionTo('ADD_TOPPING', 'T1') : props.addOptionTo('REMOVE_TOPPING', 'T1')
				}
				type='checkbox'
			/>
			<label>Topping 1</label>
			<input
				onChange={event =>
					event.target.checked ? props.addOptionTo('ADD_TOPPING', 'T2') : props.addOptionTo('REMOVE_TOPPING', 'T2')
				}
				type='checkbox'
			/>
			<label>Topping 2</label>
			<input
				onChange={event =>
					event.target.checked ? props.addOptionTo('ADD_TOPPING', 'T3') : props.addOptionTo('REMOVE_TOPPING', 'T3')
				}
				type='checkbox'
			/>
			<label>Topping 3</label>
			<p />

			<input onChange={() => props.addOptionTo('CUT', true)} checked={props.needCut} name='Cut ' type='radio' />
			<label>cut</label>
			<input onChange={() => props.addOptionTo('CUT', false)} name='Cut ' type='radio' />
			<label>not cut</label>
			<p />

			<textarea
				onBlur={() => props.addOptionTo('COMMENT', comment)}
				onChange={event => setcomment(event.target.value)}
				value={comment}
			/>

			<p />
			<label>
				Pizza with {props.base} base,
				{props.topping.length !== 0
					? props.topping.map(topping => {
							return ' ' + topping
					  })
					: 'no'}
				topping, {props.needCut ? 'need' : 'don`t need'} cut{props.comment !== '' ? `, and ${props.comment}` : '.'}
			</label>
		</div>
	)
}

const mapStoP = state => {
	return {
		...state
	}
}

const mapDtoP = diapatch => {
	return {
		addOptionTo: (actionType, option) => diapatch({ type: actionType, option: option })
	}
}

export default connect(
	mapStoP,
	mapDtoP
)(App)
