import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/Item.css';

const Item = (props) => {
    const { state, addState } = useContext(AppContext);

    const toggleCompleteItem = (text) => {
        const newItems = [...state.items];
        const indexItem = state.items.findIndex((item) => item.text === text);
        newItems[indexItem].completed = !newItems[indexItem].completed;

        addState({
            ...state,
            items: newItems,
        });
    };

    const deleteItem = (text) => {
        const items = [...state.items];
        const indexItem = state.items.findIndex((item) => item.text === text);
        items.splice(indexItem, 1);
        addState({
            ...state,
            items: items,
            itemsSearched: items,
        });
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