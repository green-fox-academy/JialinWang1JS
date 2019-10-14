import React from 'react'
import './App.css'
//------------FuncButton Component ↓
function FuncButton(props) {
	return <button onClick={props.process}>{props.textContent}</button>
}

//------------App Component ↓
class App extends React.Component {
	constructor() {
		super()

		this.state = {
			state: 2, // 0 for show button click scenario, 1 for show key down scenario, 2 for not show scenario
			number: 0,
			Scenario: [],
			process: '1'
		}
	}

	componentDidMount() {
		document.documentElement.addEventListener('keydown', (e) => {
			if (e.keyCode === 38) {
				this.setState(
					{
						process: 'press'
					},
					() => {
						this.handleIncrement()
					}
				)
			}
			if (e.keyCode === 40) {
				this.setState(
					{
						process: 'press'
					},
					() => {
						this.handleDecrease()
					}
				)
			}
		})
	}

	processScenario(number, userBehavior, result) {
		let sArray = this.state.Scenario
		let state = this.state.state
		let process = this.state.process

		if (state !== 0 && process == 'click') {
			state = 0
			sArray.push({
				element: (
					<span>
						<span className="headr-font">Scenario</span>: using the SimpleGoldenAcornApp with buttons
					</span>
				),
				sub: false
			})
		} else if (state !== 1 && process == 'press') {
			state = 1
			sArray.push({
				element: (
					<span>
						<span className="headr-font">Scenario</span>: using the SimpleGoldenAcornApp with arrow keys
					</span>
				),
				sub: false
			})
		}

		sArray.push({
			element: (
				<span>
					<span className="headr-font">Given </span>I have {number} 🌰
				</span>
			),
			sub: true
		})
		sArray.push({
			element: (
				<span>
					<span className="headr-font">When </span> I {process} on the '{userBehavior}' button
				</span>
			),
			sub: true
		})
		sArray.push({
			element: (
				<span>
					<span className="headr-font">Then </span> {result}
					<p />
				</span>
			),
			sub: true
		})
		this.setState({
			number: number,
			Scenario: sArray,
			state: state
		})
	}

	handleIncrement() {
		let number = this.state.number + 1
		let userBehavior = this.state.process === 'click' ? 'Buy one' : 'Up Arrow'
		let result = 'the amount of 🌰 increases by one'
		this.processScenario(number, userBehavior, result)
	}

	handleDecrease() {
		let number = this.state.number
		let userBehavior = this.state.process === 'click' ? 'Eat one' : 'Down Arrow'
		let result = ''

		if (number > 0) {
			number--
			result = 'the amount of 🌰 decreases by one'
		} else {
			result = ' the amount of 🌰 does not change'
		}
		this.processScenario(number, userBehavior, result)
	}
	render() {
		return (
			<div className="App">
				<FuncButton
					textContent="Buy one"
					process={() => {
						this.setState(
							{
								process: 'click'
							},
							() => {
								this.handleIncrement()
							}
						)
					}}
				/>
				<div>{this.state.number}</div>
				<FuncButton
					textContent="Eat one"
					process={() => {
						this.setState(
							{
								process: 'click'
							},
							() => {
								this.handleDecrease()
							}
						)
					}}
				/>

				<div className="list">
					{this.state.Scenario.map((scen, index) => {
						return (
							<div key={index} className={scen.sub ? 'list-item sub' : 'list-item'}>
								{scen.element}
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default App
