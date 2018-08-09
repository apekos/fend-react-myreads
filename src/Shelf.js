import React from 'react';
import Book from './Book'

function Shelf(props) {
	const { books, changeShelf, shelfTitle, bookShelf } = props

	let booksOfSameShelf = books.filter(book => book.shelf === bookShelf);

	// existBooksOnQueryResult(bookFromQuery) {
	// 	if (book.id === bookFromQuery.id) {
	// 		return book.shelf;
	// 	} else return 'none';
	// }

	return (
		<div className="list-books-content">
			<div>
				<div className="bookshelf">
					<h2 className="bookshelf-title">{shelfTitle}</h2>
					<div className="bookshelf-books">
						<ol className="books-grid">
							{booksOfSameShelf.map(book => (
								<li key={book.id}>
									<Book
										style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})` }}
										changeShelf={(e) => {changeShelf(book, e.target.value)}}
										bookShelf={bookShelf}
										bookTitle={book.title}
										bookAuthor={book.authors}
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