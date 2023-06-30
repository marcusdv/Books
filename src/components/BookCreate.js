import { useState } from 'react';
import useBooksContext from '../hooks/use-books-content';


function BookCreate() {
    // Dados ###################################
    
    const [title, setTitle] = useState('');
    const { createBook } = useBooksContext();

    // Funções ###################################

    const handleChange = (e) => { setTitle(e.target.value) }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        createBook(title);
        setTitle('')
    }

    // JSX ###################################

    return (
        <div className='book-create'>
            <form className='form-book' onSubmit={handleFormSubmit}>
                <label htmlFor='title'>Add a book!</label>
                <input className='input' name='title' id='title' type="text" onChange={handleChange} value={title} />
                <button className='button'>Adicionar</button>
            </form>
        </div>
    )

}   

export default BookCreate;