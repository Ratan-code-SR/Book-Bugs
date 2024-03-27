import { useContext} from "react";
import List_card from "./List_page/List_card";
import { UserContext } from "./Book_list";


const Wish_List = () => {
    const lists = useContext(UserContext)
    return (
        <div>
              {lists.map((list) => <List_card key={list.id} list={list} />)}
        </div>
    );
};

export default Wish_List;