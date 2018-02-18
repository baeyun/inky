import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './Header'
import Settings from './Settings'
import MyArtBoards from './MyArtBoards'
import ArtBoard from './ArtBoard'

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
				
				<Switch>
					<Route path={'/'} component={Settings} />
					<Route path={'/settings'} component={MyArtBoards} />
					<Route path={'/artboard'} component={ArtBoard} />
				</Switch>


			</div>
		)
	}
}