import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Book_list from "../pages/Book_list"
import Page_to_read from "../pages/Read-page/Page_to_read"
import Book_details from "../pages/Book_details";
import Read_books from "../pages/Read_books";
import Wish_List from "../pages/Wish_List";
import Error from "../pages/Error";
import Contact from "../components/Contact/Faq"
import Blogs from "../components/Blogs/Blogs";
import Blog_details from "../components/Blogs/Blog_details";



export const router = createBrowserRouter([
    {
        path: '*',
        element: <Error />,
    },
    {
        path: "/",
        element: <Layout />,

        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('../data.json')
            },
            {
                path: '/bookLists',
                element: <Book_list/>,
                children: [
                    {
                        index: true,
                        element: <Read_books />
                    },
                    {
                        path: 'wishList',
                        element: <Wish_List />
                    }
                ],
            },
            {
                path: '/pages',
                element: <Page_to_read />,
            },
            {
                path: '/details/:id',
                element: <Book_details />,
                loader: () => fetch('../data.json'),
            },
            {
                path: '/faqs',
                element: <Contact />,
            },
            {
                path: '/blogs',
                element: <Blogs />,
                loader: () => fetch('../blogs.json'),
            },
            {
                path: '/blog/:id',
                element: <Blog_details /> ,
                loader: () => fetch('../blogs.json'),
            },
        ]
    },
]);