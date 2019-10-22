import React, {useState, useEffect, useRef} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './App.css'

function Component1(props) {
	useEffect(() => {
		const startTime = new Date()

		return () => {
			const endTime = new Date()
			const timePassed = Math.round((endTime - startTime) / 10) / 100

			props.addRecord({
				identifier: props.identifier,
				timePassed
			})
		}
	}, [])
	return <h3>this content is {props.identifier}</h3>
}

function Component2(props) {
	useEffect(() => {
		const startTime = new Date()
		return () => {
			const endTime = new Date()
			const timePassed = Math.round((endTime - startTime) / 10) / 100

			props.addRecord({
				identifier: props.identifier,
				timePassed
			})
		}
	}, [])
	return <h3>this content is {props.identifier}</h3>
}
function App() {
	const [recordList, addRecord] = useState([])

	const lastestList = useRef(recordList)
	lastestList.current = recordList

	const addRecordTo = record => {
		addRecord([...lastestList.current, record])
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
						{recordList.map((record, index) => (
							<tr key={index}>
								<td>{record.identifier}</td>
								<td>{record.timePassed}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<Switch>
				<Route path='/c1'>
					<Component1 identifier='Component 1' addRecord={addRecordTo} />
				</Route>
				<Route path='/c2'>
					<Component2 identifier='Component 2' addRecord={addRecordTo} />
				</Route>
			</Switch>
		</Router>
	)
}
export default App
