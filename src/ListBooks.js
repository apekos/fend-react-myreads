import React from 'react';
import Title from './Title'
import Shelf from './Shelf'
import AddBook from './AddBook'


function ListBooks(props) {
	const { books, changeShelf } = props
	return (
		<div className="list-books">
			<Title />
			<Shelf
				shelfTitle='Currently Reading'
				books={books}
				changeShelf={changeShelf}
				shelf='currentlyReading'
			/>
			<Shelf
				shelfTitle='Want to Read'
				books={books}
				changeShelf={changeShelf}
				shelf='wantToRead'
			/>
			<Shelf
				shelfTitle='Read'
				books={books}
				changeShelf={changeShelf}
				shelf='read'
			/>
			<AddBook />
		</div>
	)
}

export default ListBooks