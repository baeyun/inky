import React, { Component } from 'react'

import ActionsPanel from './ActionsPanel'

import ArtBoardCtrl from './js/ArtBoardCtrl'

export default class ArtBoard extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {}

	componentDidMount() {
		// When all components are loaded to current...
		let artboardCtrl = new ArtBoardCtrl()
	}

	render() {
		return (
			<div id="inky-artboard">
				<ActionsPanel />
				<canvas id="artboard"></canvas>
			</div>
		)
	}
}