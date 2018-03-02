import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

/* Load components */
import Header from './Header'
import User from './User'

import Artboards from './Artboards'
// import ArtboardView from './ArtboardView'
import ArtboardNew from './ArtboardNew'
import ArtboardEdit from './ArtboardEdit'

export default class Inky extends Component {
	constructor(props) {
		super(props)

		// Initialize the single source of truth
		this.state = {
			artboards: {}
		}
	}

	componentWillMount() {
		/**
		 * Main Database
		 */

		// Handle no-support error
		if (!window.indexedDB) {
			let errMsg = 'WARNING: IndexedDB support is required for Noty to store notes locally. No support results in data loss.'
			// debug
			throw new ReferenceError(errMsg)
			// user
			alert(errMsg)

			return
		}

		// Create database
		this.DB = window.indexedDB.open('InkyDB', 1)

		// Setup schema
		this.DB.onupgradeneeded = (e) => {
			let db = e.target.result,
				notesObjectStore = db.createObjectStore('artboards', { keyPath: 'id', autoIncrement: true })
		}

		// Populate this.state.artboards in DESC order
		this.DB.onsuccess = (e) => {
			let db = e.target.result,
				artboardsObjectStore = db.transaction(['artboards']).objectStore('artboards'),
				artboards = artboardsObjectStore.getAll()

			artboards.onsuccess = (e) => {
				// Sort by latest
				this.setState({
					artboards: artboards.result.reverse()
				})
			}
		}
	}

	render() {
		return (
			<div id="inky">
			
				<Header />

				{/* Set routes */}
				
				<Switch>
					<Route exact path={'/user'} component={User} />
					
					<Route
						exact
						path={'/(|artboards)' /* For both the root and '/artboards' path */}
						render={(props) => <Artboards {...props} artboards={this.state.artboards} />}
					/>
					<Route
						exact
						path={'/artboards/new'}
						render={(props) => <ArtboardNew {...props} DB={this.DB} />}
					/>
					<Route path={'/artboards/edit/:boardID'} component={ArtboardEdit} />
					
					{/*<Route path={'/artboards/edit/:boardID'} component={ArtboardEdit} />
					<Route path={'/artboards/view/:boardID'} component={ArtboardView} />
					<Route exact path={'/artboards/new'} component={ArtboardNew} />*/}
				</Switch>

			</div>
		)
	}
}