import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/Item.css';

const Item = (props) => {
    const { state, addState } = useContext(AppContext);

    const toggleComplete = (text) => {
        const newItems = [...state.items];
        const indexItem = state.items.findIndex((item) => item.text === text);
        newItems[indexItem].completed = !newItems[indexItem].completed;

        addState({
            ...state,
            items: newItems,
        });
    };
    return (
        <li className="Item">
            <span
                onClick={() => toggleComplete(props.text)}
            >
                ✅
            </span>
            <p
                className={`Item-p ${props.completed && 'Item-p--complete'}`}
            >
                {props.text}
            </p>
            <span>❌</span>
      </li>
    );
}

export default Item;