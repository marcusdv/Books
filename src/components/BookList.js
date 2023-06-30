import BookShow from './BookShow';
import useBooksContext from '../hooks/use-books-content';


function BookList() {
    // Dados ###################################

    const { books } = useBooksContext();

    // Funções ###################################

    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} />
    })

    // JSX ###################################

    return (
        <div className='book-list'>
            {renderedBooks}
        </div>
    )
}

export default BookList;