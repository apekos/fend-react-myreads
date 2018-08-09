import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  //Gets all the books that are currently on the library
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(books)
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })      
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )}/>
        <Route exact path='/search' render={() => (
          <Search
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )}/>
      </div>  
    )
  }
}

export default BooksApp
