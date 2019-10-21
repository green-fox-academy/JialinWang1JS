import React from 'react'
import './Tags.css'
import {connect} from 'react-redux'

function Tags(props) {
	return (
		<div className="tag-list">
      <h1>Tags</h1>
			{props.tagList.map(tag => {
				return <div className='tag blue'>{tag}</div>
			})}
		</div>
	)
}

const mapStatesToProps = state => {
	return {
		tagList: state.tagList
	}
}

export default connect(mapStatesToProps)(Tags)
