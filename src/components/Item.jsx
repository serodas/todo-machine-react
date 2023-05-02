import React from 'react';
import { FaCheck, FaRegWindowClose } from 'react-icons/fa';
import '../styles/Item.css';

const Item = ({items, saveItemsLocalStorage, text, completed }) => {

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
                onClick={() => toggleCompleteItem(text)}
            >
                <FaCheck color={completed ? '#47c27a' : 'gray'} />
            </span>
            <p
                className={`Item-p ${completed && 'Item-p--complete'}`}
            >
                {text}
            </p>
            <span
                onClick={() => deleteItem(text)}
            >
                <FaRegWindowClose color={completed ? '#f77' : 'gray'}/>
            </span>
      </li>
    );
}

export default Item;