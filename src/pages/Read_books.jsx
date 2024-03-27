
import Page_card from "./List_page/Page_card"
import { useContext } from "react";
import { UserContext } from "./Book_list";


const Read_books = () => {
    const books = useContext(UserContext)
    return (
        <div>
            {books.map((book, index) => <Page_card key={index} book={book} />)}
        </div>
    );
};

export default Read_books;