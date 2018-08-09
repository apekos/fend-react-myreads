import React from 'react';
import Book from './Book'

function Shelf(props) {
	const { books, changeShelf, title, shelf } = props

	let booksOfSameShelf = books.filter(book => book.shelf === shelf);

	return (
		<div className="list-books-content">
			<div>
				<div className="bookshelf">
					<h2 className="bookshelf-title">{title}</h2>
					<div className="bookshelf-books">
						<ol className="books-grid">
							{booksOfSameShelf.map(book => (
								<li key={book.id}>
									<Book
										style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})` }}
										changeShelf={(e) => {changeShelf(book, e.target.value)}}
										shelf={shelf}
										title={book.title}
										author={book.authors}
									/>
								</li>
							))}
						</ol>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Shelf