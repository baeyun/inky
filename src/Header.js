import React, { Component } from 'react'

export default class Header extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {}

	componentDidMount() {}

	render() {
		return (
			<div id="inky-header">

				<a href="#" title="Inky" id="inky-logo"><i className="fa fa-paper-plane" /></a>

				{/*<ul id="inky-actions-menu" className="inky-menu-list">
									<li className="list-item"><a href="javascript:void(0)">File</a></li>
									<li className="list-item"><a href="javascript:void(0)">Edit</a></li>
									<li className="list-item pull-right"><a href="javascript:void(0)">Settings</a></li>
									<li className="list-item pull-right"><a href="javascript:void(0)">Account</a></li>
								</ul>*/}

			</div>
		)
	}
}