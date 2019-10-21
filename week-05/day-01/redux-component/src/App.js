import React from 'react'
import './App.css'
import Increaser from './Processers/Increaser'
import Decreaser from './Processers/Decreaser'
import Resetter from './Processers/Resetter'
import Setter from './Processers/Setter'
import Tags from './Processers/Tags'
import AddTag from './Processers/AddTag'
import RemoveTag from './Processers/RemoveTag'
import ComplexCounter from './Processers/ComplexCounter'
import RemoveAllTags from './Processers/RemoveAllTags'

function App() {
  return (
    <div className='App'>
      <Increaser></Increaser>
      <Decreaser></Decreaser>
      <Resetter></Resetter>
      <Setter></Setter>
      <Tags></Tags>
      <AddTag></AddTag>
      <RemoveTag></RemoveTag>
      <ComplexCounter></ComplexCounter>
	  <RemoveAllTags></RemoveAllTags>
    </div>
  )
}

export default App
