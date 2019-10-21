import React from 'react'
import './Tags.css'
import {connect} from 'react-redux'

function RemoveAllTags(props) {
	return (
		<div>
			<h1>Remove All Tags</h1>
			<button onClick={() => props.removeAllTags()}>Remove</button>
		</div>
	)
} 

const mapStatesToProps = state => {
	return {
		tagList: state.tagList
	}
}

const mapDispatchToProps = dispatch => {
	return {
		removeAllTags: tag => dispatch({type: 'REMOVE_ALL_TAGS'})
	}
}

export default connect(
	mapStatesToProps,
	mapDispatchToProps
)(RemoveAllTags)
