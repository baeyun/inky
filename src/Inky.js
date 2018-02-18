import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

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
				{/*<Switch>
									<Route path={'/'} component={MyArtBoards} />
									<Route path={'/settings'} component={Settings} />
									<Route path={'/artboard'} component={ArtBoard} />
								</Switch>*/}

				<Header />

				<ArtBoard />

			</div>
		)
	}
}