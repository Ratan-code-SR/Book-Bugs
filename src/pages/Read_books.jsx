
import Page_card from "./Read_Page/Page_card"
import { getBooks } from "../utils";
import { useEffect, useState } from "react";

const Read_books = () => {
    const getData = getBooks()
    const [books, setBooks] = useState([])
    useEffect(() => {
        setBooks(getData)
    }, [])
    
    return (
        <div>
            {books.map((book) => <Page_card key={book.id} book={book} />)}
        </div>
    );
};

export default Read_books;