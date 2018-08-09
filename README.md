# FEND - MyReads Project

## Table of Contents

* [Description](#description)
* [Run](#run)
* [Backend Server](#backend-server)
* [Important](#important)
* [Dependencies](#dependencies)
* [Contributing](#contributing)

## Description

This is a project created as part of the Udacity Front-End Developer Nanodegree.
We were provided a static example of the CSS and HTML markup that may be used, but without any of the React code that was needed to complete the project. Our goal was to add interactivity to the app by refactoring the static code in this template.

## Run

* Download the zip file or clone via Github.
* Install all project dependencies with `npm install`
* Start the development server with `npm start`

## Backend Server

To simplify our development process, we were provided a backend server to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Dependencies

* [Project React MyReads - Starter Code](https://github.com/udacity/reactnd-project-myreads-starter)
* [Create React App](https://github.com/facebookincubator/create-react-app)
* [React Router](https://www.npmjs.com/package/react-router-dom)
* [BooksAPI](src/BooksAPI.js)

## Contributing

This repository is a Udacity Front End Nanodegree project. Pull requests (most likely) will _not_ be merged into the project.
