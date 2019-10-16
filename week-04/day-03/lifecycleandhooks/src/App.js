import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './App.css'

function Component1(props) {
	console.log('c1')

	useEffect(() => {
		let startTime = new Date()

		return () => {
			let endTime = new Date()
			let timePassed = Math.round((endTime - startTime) / 10) / 100

			props.addRecord({
				identifier: props.identifier,
				timePassed: timePassed
			})
		}
	}, [])
	return <h3>this content is {props.identifier}</h3>
}

function Component2(props) {
	console.log('c2')

	useEffect(() => {
		let startTime = new Date()

		return () => {
			let endTime = new Date()
			let timePassed = Math.round((endTime - startTime) / 10) / 100

			props.addRecord({
				identifier: props.identifier,
				timePassed: timePassed
			})
		}
	}, [])
	return <h3>this content is {props.identifier}</h3>
}

function App() {
	let [recordList, addRecord] = useState([])
	let addRecordTo = record => {
		console.log(recordList)

		addRecord([...recordList, record])
	}
	return (
		<Router>
			<div className='App'>
				<Link to='/c1'>c1</Link>
				<Link to='/c2'>c2</Link>
				<table>
					<thead>
						<tr>
							<td>Component</td>
							<td>Time</td>
						</tr>
					</thead>
					<tbody>
						{recordList.map((record, index) => {
							return (
								<tr key={index}>
									<td>{record.identifier}</td>
									<td>{record.timePassed}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
			<Switch>
				<Route path='/c1'>
					<Component1
						identifier='Component 1'
						addRecord={addRecordTo}></Component1>
				</Route>
				<Route path='/c2'>
					<Component2
						identifier='Component 2'
						addRecord={addRecordTo}></Component2>
				</Route>
			</Switch>
		</Router>
	)
}
export default App
