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

	render() {
		let artboards = this.props.artboards
		
		return (
			<div id="inky-artboards" className="content" style={{width: '1200px', textAlign: 'center'}}>
				<h1>My Artboards</h1>
				
				{ // @todo handle if artboards empty
				Object.keys(artboards).map(ID => {
					let artboard = artboards[ID]

					return (
						<div key={ID} className="artboard-thumb">
							<h3>
								<Link to={`/artboards/edit/${artboard.id}`} children={artboard.title} />
							</h3>
						</div>
					)
				})}

			</div>
		)
	}
}