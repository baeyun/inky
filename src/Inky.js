import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

/* Load components */
import Header from './Header'
import User from './User'

import Artboards from './Artboards'
import Artboard from './Artboard'
// import ArtboardEdit from './ArtboardEdit'
// import ArtboardView from './ArtboardView'
// import ArtboardNew from './ArtboardNew'

export default class Inky extends Component {
	render() {
		return (
			<div id="inky">
			
				<Header />

				{/* Routes */}
				
				<Switch>
					<Route exact path={'/'} component={Artboards} />
					<Route exact path={'/user'} component={User} />
					
					<Route exact path={'/artboards'} component={Artboards} />
					<Route path={'/artboards/:boardID'} component={Artboard} />
					
					{/*<Route path={'/artboards/edit/:boardID'} component={ArtboardEdit} />
					<Route path={'/artboards/view/:boardID'} component={ArtboardView} />
					<Route exact path={'/artboards/new'} component={ArtboardNew} />*/}
				</Switch>

			</div>
		)
	}
}