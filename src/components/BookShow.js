import { useState } from 'react';
import BookEdit from './BookEdit'
import useBooksContext from '../hooks/use-books-content';

function BookShow({ book }) {
    // Dados ###################################

    const { deleteBookById } = useBooksContext();
    const [showEdit, setShowEdit] = useState(false); // Boolean que alterna o form de edit


    // Funções ###################################


    // Botão x 
    const handleDeleteClick = () => { deleteBookById(book.id) }

    // Botão abre form, e alterna
    const handleEditClick = () => { setShowEdit(!showEdit) }

    // Desce para BookEdit alterna o form 
    const handleSubmit = () => { setShowEdit(!showEdit) }


    // JSX ###################################


    // Conteúdo que é alternado
    let content = <h3>{book.title}</h3>
    if (showEdit) { content = <BookEdit book={book} onSubmit={handleSubmit} /> }

    return (
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt='book' />
            <div>{content}</div>
            <div className="actions">
                <button onClick={handleEditClick} className='edit'>Edit</button>
                <button onClick={handleDeleteClick} className='delete'>Delete</button>
            </div>
        </div>
    )
}

export default BookShow;