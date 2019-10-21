import React from 'react'
import logo from './logo.svg'
import './App.css'
import Increaser from './Processers/Increaser'
import Decreaser from './Processers/Decreaser'
import Resetter from './Processers/Resetter'
import Setter from './Processers/Setter'

function App() {
	return (
		<div className='App'>
			<Increaser></Increaser>
			<Decreaser></Decreaser>
			<Resetter></Resetter>
			<Setter></Setter>
		</div>
	)
}

export default App
