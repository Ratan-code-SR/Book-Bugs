import { useEffect, useState } from "react";
import { getBooks } from "../../utils";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import Empty from "./Empty";
const Page_to_read = () => {
    const getBooksData = getBooks()
    const [books, setBooks] = useState([])
    useEffect(() => {
        setBooks(getBooksData)
    }, [])

    const data = books;
    if (data.length <= 0) {
        return  <Empty/>
    }
    return (
        <div className="mx-auto flex justify-center my-5">
            <div className=" bg-[#f8f8f8] p-2 rounded-md">
                <BarChart width={800} height={300} data={data}>
                    <XAxis dataKey="bookName" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#00c29c' }} />
                    <CartesianGrid stroke="#00c29c" strokeDasharray="5 5" />
                    <Bar dataKey="totalPages" fill="#fbb929" barSize={30} />
                </BarChart>
            </div>
        </div>
    );
};

export default Page_to_read;