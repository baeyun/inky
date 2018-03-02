import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// Load Inky app
import Inky from './src/Inky'

ReactDOM.render((
	<BrowserRouter>
		<Inky />
	</BrowserRouter>
), document.getElementById('root'))