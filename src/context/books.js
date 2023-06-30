import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
    // Dados ###################################

    const [books, setBooks] = useState([]);

    // Funções ###################################

    // GET books
    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }, []);


    // POST books
    const createBook = async (title) => {
        await axios.post('http://localhost:3001/books', { title })
        fetchBooks();
    };

    // DELETE books
    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    // PUT books
    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, { title: newTitle });

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                // response.data é o objeto retornado, atualizado, da api.
                // ...book objeto antigo, ...response.data objeto atuzliado
                return { ...book, ...response.data };
            }
            return book;
        });

        setBooks(updatedBooks);
    };


    // Utilizado para compartilha um 'value'. Geralemnte um objeto que tem dados, funções etc.
    return <BooksContext.Provider value={{ books, fetchBooks, createBook, deleteBookById, editBookById }}>
        {children}
    </BooksContext.Provider>
}

export { Provider };
export default BooksContext;

// improt BooksContext, { Provider } from './components/books'