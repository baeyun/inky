import React, { Component } from 'react'

export default class ArtboardNew extends Component {
	constructor(props) {
		super(props)

		this.addNewArtboard = this.addNewArtboard.bind(this)
	}

	// @todo improve
	addNewArtboard(e) {
		e.preventDefault()

		let { title, bgColor } = this.refs

		// @todo handle error
		// @todo prevent duplicates
		if (!title.value)
			return

		// Add to DB
		let DB = this.props.DB.result,
			artboardsObjectStore = DB.transaction(['artboards'], 'readwrite').objectStore('artboards')

		artboardsObjectStore.add({title: title.value, bgColor: bgColor.value}).onsuccess = e => {
			let ID = e.target.result

			// Redirect to edit section after creation
			window.location = `/artboards/edit/${ID}`
		}
	}

	render() {
		return (
			<section id="inky-artboardnew" className="content" style={{maxWidth: '400px'}}>
				<h1 style={{textAlign: 'center'}}>Create new project</h1>

				<form onSubmit={this.addNewArtboard} style={{textAlign: 'center'}}>
					<input type="text" placeholder="Project title" ref="title" style={{width: '350px'}} />
					<br />
					<br />
					<div>
						<label for="bgColor" children="Artboard background color" style={{marginRight: '10px'}} />
						<input id="bgColor" type="color" ref="bgColor" />
					</div>
					<br />
					<button type="submit"><i className="fa fa-plus" /> Add</button>
				</form>
			</section>
		)
	}
}