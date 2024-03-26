import { useEffect, useState } from "react";
import { getWishList } from "../utils";
import List_card from "./List_page/List_card";


const Wish_List = () => {
    const getData = getWishList()
    const [lists, setLists] = useState([])
    useEffect(() => {
        setLists(getData)
    }, [])
    return (
        <div>
              {lists.map((list) => <List_card key={list.id} list={list} />)}
        </div>
    );
};

export default Wish_List;