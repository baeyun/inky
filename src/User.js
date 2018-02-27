import React, { Component } from 'react'

export default class User extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div id="inky-settings" className="content">
				<h1>Settings</h1>
				<h3 className="label">General Settings</h3>
				<h3 className="label">Appearance</h3>
			</div>
		)
	}
}