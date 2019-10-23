import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchJPData } from './redux'
import './App.css'

function App({ state, fetchDate }) {
let {users, loading} = state  
	useEffect(() => {
    fetchDate()
  }, [])
	return (
		<div className='App'>
			<ul>
				{users.map((user, index) => {
					return <li key={index}>{user.name}</li>
				})}
			</ul>
		</div>
	)
}

const mapStoP = state => {
	return {
		state
	}
}

const mapDtoP = dispatch => {
	return {
		fetchDate: () => {
			dispatch(fetchJPData())
		}
	}
}

export default connect(
	mapStoP,
	mapDtoP
)(App)
