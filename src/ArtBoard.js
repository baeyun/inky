import React, { Component } from 'react'

export default class ArtBoard extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {}

	componentDidMount() {}

	render() {
		return (
			<div id="inky-artboard">
				<canvas id="artboard"></canvas>
			</div>
		)
	}
}