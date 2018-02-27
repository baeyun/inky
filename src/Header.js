import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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

				<ul id="inky-nav" className="nav unstyle">
					<li className="nav-item">
						<Link to='/artboards'>Artboards</Link>
					</li>
					<li className="nav-item">
						<Link to='/artboards'><i className="fa fa-plus" /> <span children="New" /></Link>
					</li>
					<li className="nav-item" title="Inky Settings">
						<Link to='/user'><i className="fa fa-user" /></Link>
					</li>
				</ul>

			</div>
		)
	}
}