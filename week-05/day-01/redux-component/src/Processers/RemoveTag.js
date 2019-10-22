import React from 'react'
import './Tags.css'
import {connect} from 'react-redux'

function RemoveTag(props) {
	return (
		<div>
			<h1>Remove Tag</h1>
			{props.tagList.map((tag, index) => {
				return (
					<div
						key={index}
						className='tag red'
						onClick={() => props.removeTheTag(tag)}>
						{tag}
					</div>
				)
			})}
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
		removeTheTag: tag => dispatch({type: 'REMOVE_TAG', tag})
	}
}

export default connect(
	mapStatesToProps,
	mapDispatchToProps
)(RemoveTag)
