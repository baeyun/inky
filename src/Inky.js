import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Settings from './Settings'
import Artboards from './Artboards'
import Artboard from './Artboard'

export default class Inky extends Component {
	render() {
		return (
			<div id="inky">
			
				<Header />

				{/* Routes */}
				
				<Switch>
					<Route exact path={'/'} component={Artboards} />
					<Route exact path={'/settings'} component={Settings} />
					<Route exact path={'/artboards'} component={Artboards} />
					<Route path={'/artboards/:boardID'} component={Artboard} />
				</Switch>

			</div>
		)
	}
}