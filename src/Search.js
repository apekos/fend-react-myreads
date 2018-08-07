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
	  		}
	  	})
	  }	else {
	  	this.setState({ showingBooks: [] })
	  }	
  }

	render() {
  	const { query, showingBooks } = this.state

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
						<Book books={showingBooks}/>
					</ol>
				</div>
			</div>
		)
	}
}

export default Search