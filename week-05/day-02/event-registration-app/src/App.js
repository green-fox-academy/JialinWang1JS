import React, { useState } from 'react'
import './App.css'
import { connect } from 'react-redux'
function App(props) {
	const [strArray, setStrArray] = useState(['', '', ''])
	return (
		<div className='App'>
			<input
				type='text'
				placeholder='First Name'
				onChange={event => {
					let array = strArray
					array[0] = event.target.value
					setStrArray(array)
				}}
			/>
			<input
				type='text'
				placeholder='Last name'
				onChange={event => {
					let array = strArray
					array[1] = event.target.value
					setStrArray(array)
				}}
			/>
			<input
				type='text'
				placeholder='Email address'
				onChange={event => {
					let array = strArray
					array[2] = event.target.value
					setStrArray(array)
				}}
			/>
			<button onClick={() => props.addSomething(strArray)}>Submit</button>
			<ul>
				<li>{props.firstName}</li>
				<li>{props.lastName}</li>
				<li>{props.emailAddress}</li>
			</ul>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		firstName: state.firstName,
		lastName: state.lastName,
		emailAddress: state.emailAddress
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addSomething: strArray => dispatch({ type: 'ADD', strArray })
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
