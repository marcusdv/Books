import { useState } from 'react';
import useBooksContext from '../hooks/use-books-content';


function BookEdit({ book, onSubmit }) {
    // Dados ###################################

    const [title, setTitle] = useState(book.title)
    const { editBookById } = useBooksContext();


    // Funções ###################################

    const handleTitleChange = (e) => { setTitle(e.target.value) }
    const handleEditSubmit = (e) => {
        e.preventDefault();
        editBookById(book.id, title);
        onSubmit();
    }

    // JSX ###################################

    return <form className='book-edit' onSubmit={handleEditSubmit}>
        <label>Title</label>
        <input className='input' type="text" value={title} onChange={handleTitleChange} />
        <button className='button is-primary'>Save</button>
    </form>

}

export default BookEdit;