import React, { Component } from 'react'

export default class ActionsPanel extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {}

	componentDidMount() {}

	render() {
		return (
			<div id="inky-action-bar">
				<ul className="unstyle action-group" id="actions-bar-tools">
					<li className="action-item"><a href="#"><i className="fa fa-eye" /></a></li>
					<li className="action-item"><a href="#"><i className="fa fa-paint-brush" /></a></li>
					<li className="action-item"><a href="#"><i className="fa fa-pencil" /></a></li>
					<li className="action-item"><a href="#"><i className="fa fa-circle" /></a></li>
					<li className="action-item"><a href="#"><i className="fa fa-fire" /></a></li>
					<li className="action-item"><a href="#"><i className="fa fa-play" /></a></li>
				</ul>
				<ul className="unstyle action-group" id="actions-bar-swatch">
					<li className="action-item" title="Open swatch"><a href="#"><i className="fa fa-square" style={{ color: "#ffa500" }} /></a></li>
				</ul>
				<ul className="unstyle action-group" id="actions-bar-brushes">
					<li className="action-item"><a href="#"><i className="fa fa-tint" /></a></li>
					<li className="action-item"><a href="#"><i className="fa fa-star" /></a></li>
					<li className="action-item"><a href="#"><i className="fa fa-th-large" /></a></li>
					<li className="action-item"><a href="#"><i className="fa fa-location-arrow" /></a></li>
					<li className="action-item"><a href="#"><i className="fa fa-plus" /></a></li>
					<li className="action-item"><a href="#"><i className="fa fa-history" /></a></li>
				</ul>
			</div>
		)
	}
}