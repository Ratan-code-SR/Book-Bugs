import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Book_list from "../pages/Book_list"
import Page_to_read from "../pages/Page_to_read"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/bookLists',
                element: <Book_list />
            },
            {
                path: '/pages',
                element: <Page_to_read />
            }
        ]
    },
]);