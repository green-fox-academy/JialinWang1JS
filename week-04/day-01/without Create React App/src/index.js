import React from 'react'
import ReactDOM from 'react-dom'

import {FirstComponent as A} from './first-component'

let element = <A />
let element = <SecondComponent title="My nice title" />;
ReactDOM.render(element, document.getElementById('react-container'))
