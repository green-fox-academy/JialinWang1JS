import React from 'react'
import ReactDOM from 'react-dom'

import FirstComponent from './first-component'

// let element = <FirstComponent />
let element = <SecondComponent title="My nice title" />;
ReactDOM.render(element, document.getElementById('react-container'))
