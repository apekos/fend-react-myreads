import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {
	state = {
		query: '',
		showingBooks: []
	}

	updateQuery = (query) => {
    this.setState({ query: query })
    this.searchBooks(query)
  }

  searchBooks = (query) => {
  	if (query) {
	  	BooksAPI.search(query).then((books) => {
	  		if (books.error) {
	  			this.setState({ showingBooks: [] })
	  		} else {
	  			this.setState({ showingBooks: books })
	  			console.log(books)
	  		}
	  	})
	  }	else {
	  	this.setState({ showingBooks: [] })
	  }	
  }

	render() {
  	const { query, showingBooks } = this.state
  	const { changeShelf, books } = this.props

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to='/'>Close</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							value={query}
            	onChange={(event) => this.updateQuery(event.target.value)}
							/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{showingBooks.map(book => {
							let shelf = 'none';
							this.props.books.forEach((b) => {
								if (b.id === book.id) {
									shelf = b.shelf;
								}
							})
							return(
								<li key={book.id}>
									<Book
										style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})` }}
										changeShelf={(e) => {changeShelf(book, e.target.value)}}
										bookShelf={shelf}
										bookTitle={book.title}
										bookAuthor={book.authors}
									/>
								</li>
							)
						})}
					</ol>
				</div>
			</div>
		)
	}
}

export default Search