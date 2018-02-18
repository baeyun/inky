import React, { Component } from 'react'

export default class Settings extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {}

	componentDidMount() {}

	render() {
		return (
			<div id="inky-settings" className="content">
				<h1>Inky Settings</h1>
				<h3 className="label">General Settings</h3>
				<h3 className="label">Appearance</h3>
			</div>
		)
	}
}