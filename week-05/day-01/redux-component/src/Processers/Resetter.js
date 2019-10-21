import React from 'react'
import './processers.css'
import {connect} from 'react-redux'

function Resetter(props) {
	return (
		<div>
			<h1>The Resetter</h1>
			<button onClick={()=>props.resetNum()}>Reset</button>
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
		resetNum: () => dispatch({type: 'RESETTER'})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Resetter)