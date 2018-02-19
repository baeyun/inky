import React, { Component } from 'react'

import ActionsPanel from './ActionsPanel'

import ArtboardCtrl from './js/ArtboardCtrl'

export default class Artboard extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {}

	componentDidMount() {
		// const { match: { params } } = this.props;

		let artboardCtrl = new ArtboardCtrl()

		// console.log(this.props.match)
	}

	render() {
		return (
			<div id="inky-artboard">
				<ActionsPanel />
				<h1 style={{marginLeft: '25px'}}>Artboard: {this.props.match.params.boardID}</h1>
				<canvas id="artboard"></canvas>
			</div>
		)
	}
}