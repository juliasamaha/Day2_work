import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import TaskInput from './components/TaskInput';
import TaskTable from './components/TaskTable';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';


export default function App() {

  const [books, setBooks] = useState([]);

  function onBookAdded(book) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    // update the library with the new book
    setBooks([...books, book]);
  }

  function onBookAdded(book) {
    const newBook = book.map((b) => {
      return b.id === book.id ? book : b;
    });
    setBooks(newBooks);
  }


  return (
    <div className='container mt-5'>
      <div className='card card-body text-center'>
        <h1>Add Book:</h1>
        <form>
            <div class="form-group">
            <label for="titleinput">Title</label>
            <input type="title" class="form-control" id="titleinput"></input>
          </div>
          <div class="form-group">
            <label for="authorinput">Author</label>
            <input type="author" class="form-control" id="authorinput"></input>
          </div>
          <div class="form-group">
            <label for="ISBNinput">ISBN#</label>
            <input type="ISBN" class="form-control" id="ISBNinput"></input>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        <TaskInput onTaskCreated={onTaskCreated} />

        <TaskTable
          books={books}
          onBookAdded={onBookAdded}
        />

      </div>
    </div>
  )
}