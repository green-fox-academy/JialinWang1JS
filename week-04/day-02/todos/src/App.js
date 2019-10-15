import React, {useState} from 'react'
import deleteSvg from './images/delete.svg'
import doneSvg from './images/Done.svg'
import noDoneSvg from './images/NoDone.svg'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css'

function TodoItem(props) {
	const [isDone, setDone] = useState(props.isDone)
	const [title, setTitle] = useState(props.title)

	return (
		<div className={isDone ? 'todo-item done' :'todo-item' }>
			<label>{title}</label>
			<div className="icons">
				<img
					onClick={() => {
						props.deleteItem()
					}}
					src={deleteSvg}></img>
				{isDone ? (
					<img src={doneSvg}></img>
				) : (
					<img
						onClick={() => {
							setDone(true)
						}}
						src={noDoneSvg}></img>
				)}
			</div>
		</div>
	)
}

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			itemList: [],
			input: ''
		}
	}
	addTodoItem() {
		let input = this.state.input
		if (input.length < 3) {
			alert('title mush be long than 3')
		} else {
			let list = this.state.itemList
			list.push({
				title: input,
				isDone: false
			})
			this.setState({
				itemList: list
			})
		}
	}
	updateInput(event) {
		this.setState({
			input: event.target.value
		})
	}
	deleteItem(item){
		let itemList = this.state.itemList
		let index = itemList.indexOf(item)
		console.log(itemList ,index);
		
		itemList.splice(index, 1)
		
		this.setState({
			itemList: itemList
		})		
	}
	render() {
		let itemList = this.state.itemList
		return (
			<div className='App'>
				<label className='heading'>TODOS</label>
				<div className="inputField">
					<input style={{height:40}} onChange={event => this.updateInput(event)} className='inputField'></input>
					<button onClick={() => this.addTodoItem()} className='inputField button-text'>
						Add
					</button>
				</div>
				{itemList.map((item, itemIndex) => {
					return (
						<TodoItem key={itemIndex}
							title={item.title}
							isDone={item.isDone}
							deleteItem={() => {
								this.deleteItem(item)
							}}></TodoItem>
					)
				})}
			</div>
		)
	}
}

export default App
