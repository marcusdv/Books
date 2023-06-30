import { useEffect } from 'react'
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import useBooksContext from './hooks/use-books-content';

function App() {
    const {fetchBooks} = useBooksContext();

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    return <div className='app'>
        <h1>Reading list</h1>
        <BookList />
        <BookCreate />
    </div>
};

export default App;