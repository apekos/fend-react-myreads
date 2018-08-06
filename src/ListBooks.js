import React, { Component } from 'react';
import Title from './Title'
import Shelves from './Shelves'
import AddBook from './AddBook'


class ListBooks extends Component {
	render() {
		return (
			<div className="list-books">
				<Title />
				<Shelves />
				<AddBook />
			</div>
		)
	}
}

export default ListBooks