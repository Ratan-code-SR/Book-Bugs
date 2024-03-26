import {  toast } from 'react-toastify';

export const getBooks = () => {
    let books = []
    const storedBooks = localStorage.getItem('books')
    if (storedBooks) {
        books = JSON.parse(storedBooks)
    }
    return books;
}

export const saveReadBooksList = book => {
    let books = getBooks()
    const isExist = books.find(b => b.id === book.id)
    if (isExist) {
        return toast.error('Already add to Read List!')
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Book add to Read  List Successfully!')
}


// export const saveWishBookList = book => {
//     let books = getBooks()
//     const isExist = books.find(b => b.id === book.id)
//     if (isExist) {
//         return toast.error('Already add to Read List!')
//     }
//     books.push(book)
//     localStorage.setItem('books', JSON.stringify(books))
//     toast.success('Book add to Read  List Successfully!')
// }


