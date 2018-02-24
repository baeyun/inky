import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Temporary storage
import artboardList from './artboards.json'

export default class Artboards extends Component {
	constructor(props) {
		super(props)

		this.state = {
			artboards: artboardList
		}
	}

	componentWillMount() {}

	componentDidMount() {}

	render() {
		const { artboards } = this.state
		
		return (
			<div id="inky-artboards" className="content" style={{width: '1200px', textAlign: 'center'}}>
				<h1>My Artboards</h1>
				
				{ // Loop
				Object.keys(artboards).map(id => {
					let artboard = artboards[id]

					return (
						<div key={id} className="artboard-thumb">
							<h3>
								<Link to={`/artboards/${id}`} children={artboard.title} />
							</h3>
						</div>
					)
				})}

			</div>
		)
	}
}