import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Settings from './Settings'
import Artboards from './Artboards'
import Artboard from './Artboard'

export default class Inky extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {}

	componentDidMount() {}

	render() {
		return (
			<div id="inky">
			
				<Header />

				{/* Main Content */}
				
				<Switch>
					<Route exact path={'/'} component={Artboards} />
					<Route exact path={'/settings'} component={Settings} />
					<Route path={'/artboard'} component={Artboard} />
					{/*<Route path={'/artboard'} component={Artboards}>
											<Route path={'/:boardID'} component={Artboard} />
										</Route>*/}
				</Switch>

			</div>
		)
	}
}