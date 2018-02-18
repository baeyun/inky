import React, { Component } from 'react'
import ArtBoard from './ArtBoard'
import Header from './Header'
import ActionsPanel from './ActionsPanel'
import ArtBoardCtrl from './js/ArtBoardCtrl'

export default class Inky extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {}

	componentDidMount() {
		// When all components are loaded to current...
		let artBoardController = new ArtBoardCtrl()
	}

	render() {
		return (
			<div id="inky">
				<Header />
				<ActionsPanel />
				<ArtBoard />
			</div>
		)
	}
}