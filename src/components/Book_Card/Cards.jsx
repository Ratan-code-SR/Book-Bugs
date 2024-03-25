import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Cards = () => {
    const booksData = useLoaderData()
    return (
        <div className="my-5">
            <h1 className="text-3xl text-center font-bold my-10">Books</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                {booksData.map(data => <Card key={data.id} data={data} />)}
            </div>
        </div>
    );
};

export default Cards;