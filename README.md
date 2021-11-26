# My Reads

This is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.

## Getting Started

## Frontend
### TL;DR

To start using the application right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Backend Server

I am using a ready backend server provided by Udacity on `https://reactnd-books-api.udacity.com`

The api currently provides 5 endpoints as follows:

`GET /status`   
`GET /books`  
`GET /books/:id`  
`PUT /books/:id { shelf }`  
`POST /search { query, maxResults }`  

we only used these three endpoints to get all books, update and search:

`GET /books`  
`PUT /books/:id { shelf }`  
`POST /search { query, maxResults }`  

which are provided inside file `BooksAPI.js`

---

#### Here are some important notes provided by udacity about the API:
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


### DEMO
![gifDemo](demo/demo.gif)
