import React, {useState} from 'react'
import './Tags.css'
import {connect} from 'react-redux'

function AddTag(props) {
  const [value, setValue] = useState(0)
	return (
		<div>
      <h1>Add Tag</h1>
      <input onChange={(event)=> setValue(event.target.value)}></input>
      <button onClick={() => props.addTagTo(value)}>Add</button>
    </div>
	)
}

const mapStatesToProps = state => {
	return {
		tagList: state.tagList
	}
}

const mapDispatchToProps = dispatch =>{
  return {
    addTagTo: (value) => dispatch({type:'ADD_TAG', value})
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(AddTag)