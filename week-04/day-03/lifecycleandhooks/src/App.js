import React, {useState, useEffect, useRef} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './App.css'

function Component1(props) {
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
	const [temp, setTemp] = React.useState(5)
	//for Demo
	// const log = () => {
	// 	setTimeout(() => {
	// 		console.log('3 秒前 temp = 5，现在 temp =', temp)
	// 	}, 3000)
	// }

	// return (
	// 	<div
	// 		onClick={() => {
	// 			log()
	// 			setTemp(3)
	// 			// 3 秒前 temp = 5，现在 temp = 5
	// 		}}>
	// 		xyz
	// 	</div>
	// )

	let [recordList, addRecord] = useState([])
	let lastestList = useRef(recordList)

	lastestList.current = recordList
	let addRecordTo = record => {
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
