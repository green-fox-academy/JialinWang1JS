import React from 'react'
import './processers.css'
import {connect} from 'react-redux'

function Increaser(props) {
	return (
		<div>
			<h1>The Increaser</h1>
			<p>{props.number}</p>
			<button onClick={() => props.increaseNum()}>Increase</button>
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
		increaseNum: () => dispatch({type: 'INCREASE'})
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Increaser)
