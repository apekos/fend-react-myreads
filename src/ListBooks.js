import React, { Component } from 'react';
import Title from './Title'
import Shelves from './Shelves'
import AddBook from './AddBook'


class ListBooks extends Component {
	render() {
		const { books } = this.props
		return (
			<div className="list-books">
				<Title />
				<Shelves books={books}/>
				<AddBook />
			</div>
		)
	}
}

export default ListBooks