import { toast } from 'react-toastify';

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

export const getWishList = () => {
    let lists = []
    const storedList = localStorage.getItem('wish')
    if (storedList) {
        lists = JSON.parse(storedList)
    }
    return lists;
}



export const addWishList = book => {
    let lists = getWishList()
    let books = getBooks()
    const isExist = books.find(b => b.id === book.id)
    const isExistList = lists.find(b => b.id === book.id)
    if (isExist) {
        return toast.error("Book add to read List added");
    }
    if (isExistList) {
        return toast.error("Wish book already added!");
    }
    books.push(book)
    localStorage.setItem("wish", JSON.stringify(books))
    toast.success("Wish list added successfully");

}