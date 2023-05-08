import React from 'react';
import { FaCheck, FaRegWindowClose, FaRegEdit } from 'react-icons/fa';
import '../styles/Item.css';

const Item = ({items, saveItemsLocalStorage, id, text, completed }) => {

    const toggleCompleteItem = (id) => {
        const newItems = [...items];
        const indexItem = newItems.findIndex((item) => item.id === id);
        newItems[indexItem].completed = !newItems[indexItem].completed;
        saveItemsLocalStorage(newItems);
    };

    const deleteItem = (id) => {
        const cloneItems = [...items];
        const indexItem = cloneItems.findIndex((item) => item.id === id);
        cloneItems.splice(indexItem, 1);
        saveItemsLocalStorage(cloneItems);
    };

    const editItem = (id) => {
        console.log('editItem', id);
    };

    return (
        <li className="Item">
            <span
                onClick={() => toggleCompleteItem(id)}
            >
                <FaCheck color={completed ? '#47c27a' : ''} className='icon--completed' />
            </span>
            <p
                className={`Item-p ${completed && 'Item-p--complete'}`}
            >
                {text}
            </p>
            <span
                onClick={() => editItem(id)}
            >
                <FaRegEdit className='icon--edit' />
            </span>
            <span
                onClick={() => deleteItem(id)}
                style={{ marginLeft: '10px' }}
            >
                <FaRegWindowClose className='icon--delete'/>
            </span>
      </li>
    );
}

export default Item;