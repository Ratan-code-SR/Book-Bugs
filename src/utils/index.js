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
        return toast.error('Book Already Add To Read List!')
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Book Add To Read List Successfully!')
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
        return toast.error("Book Already Add To Read List!");
    }
    if (isExistList) {
        return toast.error("Book Already Add To Wish List! !");
    }
    books.push(book)
    localStorage.setItem("wish", JSON.stringify(books))
    toast.success("Wish List Add Successfully!");
}

