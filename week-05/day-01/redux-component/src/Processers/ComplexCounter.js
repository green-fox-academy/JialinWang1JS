import React from 'react'
import {connect} from 'react-redux'

function ComplexCounter(props) {
	return (
		<div>
			<h1>Complex Counter</h1>
			<p>
				<h2>{+props.tagListLen + +props.number}</h2>
			</p>
		</div>
	)
}

const mapStateToProps = state => {
	return {
    number: state.number,
    tagListLen: state.tagList.length
	}
}

export default connect(mapStateToProps)(ComplexCounter)
