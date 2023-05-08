import React from 'react';
import { FaCheck, FaRegWindowClose, FaRegEdit } from 'react-icons/fa';
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

    const editItem = (text) => {
        console.log('editItem', text);
    };

    return (
        <li className="Item">
            <span
                onClick={() => toggleCompleteItem(text)}
            >
                <FaCheck color={completed ? '#47c27a' : ''} className='icon--completed' />
            </span>
            <p
                className={`Item-p ${completed && 'Item-p--complete'}`}
            >
                {text}
            </p>
            <span
                onClick={() => editItem(text)}
            >
                <FaRegEdit className='icon--edit' />
            </span>
            <span
                onClick={() => deleteItem(text)}
                style={{ marginLeft: '10px' }}
            >
                <FaRegWindowClose className='icon--delete'/>
            </span>
      </li>
    );
}

export default Item;