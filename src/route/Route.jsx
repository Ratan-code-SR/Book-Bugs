import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Book_list from "../pages/Book_list"
import Page_to_read from "../pages/Page_to_read"
import Book_details from "../pages/Book_details";


export const router = createBrowserRouter([
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
                element: <Book_list />,

            },
            {
                path: '/pages',
                element: <Page_to_read />
            },
            {
                path: '/details/:id',
                element: <Book_details />,
                loader: ()=> fetch('../data.json')
               
            }
        ]
    },
]);