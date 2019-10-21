import React, {useState} from 'react'
import './processers.css'
import {connect} from 'react-redux'

function Setter(props) {
  const [inputValue, setInputValue] = useState(0)
	return (
		<div>
			<h1>The Setter</h1>
			<input onChange={(event) => setInputValue(event.target.value)} value={inputValue}></input>
			<button onClick={()=> props.resetNum(inputValue)}>Set</button>
		</div>
	)
}
const mapStateToProps = state => {
	return {
		number: state.number
	}
}

const mapDispatchToProps = dispatch => {
	return {
		resetNum: (inputValue) => dispatch({type: 'SETTER', number:inputValue})
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Setter)
