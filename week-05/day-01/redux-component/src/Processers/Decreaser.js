import React from 'react'
import './processers.css'
import {connect} from 'react-redux'

function Decreaser(props) {
	return (
		<div>
			<h1>The Decreaser</h1>
			<p>{props.number}</p>
			<button onClick={() => props.decreaseNum()}>Decrease</button>
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
		decreaseNum: () => dispatch({type: 'DECREASE'})
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Decreaser)
