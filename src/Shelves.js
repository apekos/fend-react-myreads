import React, { Component } from 'react';
import Book from './Book'

class Shelves extends Component {
	render() {
		const { books } = this.props

		return (
			<div className="list-books-content">
				<div>
					<div className="bookshelf">
						<h2 className="bookshelf-title">Currently Reading</h2>
						<div className="bookshelf-books">
							<ol className="books-grid">
								<Book books={books.filter(book => book.shelf === 'currentlyReading')}/>
							</ol>
						</div>
					</div>
					<div className="bookshelf">
						<h2 className="bookshelf-title">Want to Read</h2>
						<div className="bookshelf-books">
							<ol className="books-grid">
								<Book books={books.filter(book => book.shelf === 'wantToRead')}/>
							</ol>
						</div>
					</div>
					<div className="bookshelf">
						<h2 className="bookshelf-title">Read</h2>
						<div className="bookshelf-books">
							<ol className="books-grid">
								<Book books={books.filter(book => book.shelf === 'read')}/>
							</ol>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Shelves