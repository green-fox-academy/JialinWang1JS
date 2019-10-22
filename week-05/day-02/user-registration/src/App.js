import React, { useState } from 'react'
import { connect } from 'react-redux'
import './App.css'

function App(props) {
	const [strArray, setStrArray] = useState(['', '', ''])
	const [checkResult, setCheckResult] = useState([])
	const [buttonDisable, setButtonDisable] = useState(true)
	console.log(buttonDisable, checkResult)

	//--------write here for saving time----------//

	const checkUserName = () => {
		if (strArray[0] === '') {
			if (checkResult.indexOf('USERNAME') === -1) setCheckResult([...checkResult, 'USERNAME'])
		} else {
			setCheckResult([...checkResult.filter(result => result !== 'USERNAME')])
			setButtonDisable(checkResult.length !== 0)
		}
	}
	const checkPassword = () => {
		if (strArray[1] === '' || strArray[1].length < 8) {
			if (checkResult.indexOf('PASSWORD') === -1) setCheckResult([...checkResult, 'PASSWORD'])
		} else {
			setCheckResult([...checkResult.filter(result => result !== 'PASSWORD')])

			setButtonDisable(checkResult.length !== 0)
		}
	}
	const checkEmail = () => {
		if (strArray[2].split().indexOf('@') === -1) {
			if (checkResult.indexOf('EMAIL') === -1) setCheckResult([...checkResult, 'EMAIL'])
		} else {
			setCheckResult([...checkResult.filter(result => result !== 'EMAIL')])
			console.log(checkResult.length !== 0)
			setButtonDisable(checkResult.length !== 0)
		}
	}
	//--------------------------------------//

	const handleOnChange = (value, index) => {
		let array = strArray
		array[index] = value
		setStrArray(array)
	}
	return (
		<div className='App'>
			<input
				onBlur={checkUserName}
				onChange={event => handleOnChange(event.target.value, 0)}
				type='text'
				placeholder='Username'
			/>
			<label hidden={checkResult.indexOf('USERNAME') === -1} className='errorMsg'>
				* username incorrect format!!
			</label>
			<input
				onBlur={checkPassword}
				onChange={event => handleOnChange(event.target.value, 1)}
				type='password'
				placeholder='Password '
			/>
			<label hidden={checkResult.indexOf('PASSWORD') === -1} className='errorMsg'>
				* password incorrect format!!
			</label>
			<input
				onBlur={checkEmail}
				onChange={event => handleOnChange(event.target.value, 2)}
				type='text'
				placeholder='Email address'
			/>
			<label hidden={checkResult.indexOf('EMAIL') === -1} className='errorMsg'>
				* email incorrect format!!
			</label>
			<button disabled={buttonDisable} onClick={() => props.addStr(strArray)}>
				Register
			</button>
		</div>
	)
}

const mapStoP = state => {
	return {
		...state
	}
}

const mapDtoP = dispatch => {
	return {
		addStr: strArray => dispatch({ type: 'ADD', strArray })
	}
}

export default connect(
	mapStoP,
	mapDtoP
)(App)
