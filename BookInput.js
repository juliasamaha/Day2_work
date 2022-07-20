import { getByTitle } from '@testing-library/react';
import React,  {useState } from 'react';

import { Book } from '../src';

export default function BookInput(props) {
    const [bookName, setBookName] = useState('');

    function onFormSubmit(event) {

    
        event.preventDefault();

        const book = new Book(
            (new getByTitle())
        );

        props.onFormSubmit(book);

        setBookName('');

    }

    return (
        <div className='mt-4'>
            <form onSubmit={onFormSubmit}>
                <div className='input-group mb-3'>
                <input value={bookName}></input>
                <button className="btn btn-outline-secondary"type="submit">+</button>
                </div>
            </form>
        </div>
    )
}