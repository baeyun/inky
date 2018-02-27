import React, { Component } from 'react'

import ActionsPanel from './ActionsPanel'

import ArtboardCtrl from './js/ArtboardCtrl'

export default class ArtboardEdit extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {}

	componentDidMount() {
		let artboardCtrl = new ArtboardCtrl()
	}

	render() {
		const { params } = this.props.match
		
		return (
			<div id="inky-artboard">
				<ActionsPanel />
				<canvas id="artboard"></canvas>
			</div>
		)
	}
}