import React from 'react'
import {BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

function Error() {
	let {errorcode} = useParams()
	console.log(errorcode)

	return errorcode ? <div className="Error">Error: {errorcode} </div> : <div className="Error">Something bad happened</div>
}

function HelloWorld() {
	return <div className="App">Hello World!</div>
}

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<HelloWorld />
				</Route>
				<Route path="/error/:errorcode">
					<Error />
				</Route>
				<Route path="/error">
					<Error />
				</Route>
				<Route>
					<div>This page is not implemented yet</div>
				</Route>
			</Switch>
		</Router>
	)
}

export default App
