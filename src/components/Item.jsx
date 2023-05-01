import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/Item.css';

const Item = (props) => {
    const { items, saveItemsLocalStorage } = useContext(AppContext);

    const toggleCompleteItem = (text) => {
        const newItems = [...items];
        const indexItem = newItems.findIndex((item) => item.text === text);
        newItems[indexItem].completed = !newItems[indexItem].completed;
        saveItemsLocalStorage(newItems);
    };

    const deleteItem = (text) => {
        const cloneItems = [...items];
        const indexItem = cloneItems.findIndex((item) => item.text === text);
        cloneItems.splice(indexItem, 1);
        saveItemsLocalStorage(cloneItems);
    };

    return (
        <li className="Item">
            <span
                onClick={() => toggleCompleteItem(props.text)}
            >
                ✅
            </span>
            <p
                className={`Item-p ${props.completed && 'Item-p--complete'}`}
            >
                {props.text}
            </p>
            <span
                onClick={() => deleteItem(props.text)}
            >
                ❌
            </span>
      </li>
    );
}

export default Item;