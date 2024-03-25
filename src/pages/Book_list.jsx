import { useLoaderData } from "react-router-dom";


const Book_list = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <h1>book list</h1>
        </div>
    );
};

export default Book_list;