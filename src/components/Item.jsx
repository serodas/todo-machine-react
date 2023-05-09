import React from 'react';
import { FaCheck, FaRegWindowClose, FaRegEdit } from 'react-icons/fa';
import '../styles/Item.css';

const Item = ({id, text, completed, onComplete, onDelete, onEdit }) => {
    
    return (
        <li className="Item">
            <span
                onClick={() => onComplete(id)}
            >
                <FaCheck color={completed ? '#47c27a' : ''} className='icon--completed' />
            </span>
            <p
                className={`Item-p ${completed && 'Item-p--complete'}`}
            >
                {text}
            </p>
            <span
                onClick={onEdit}
            >
                <FaRegEdit className='icon--edit' />
            </span>
            <span
                onClick={() => onDelete(id)}
                style={{ marginLeft: '10px' }}
            >
                <FaRegWindowClose className='icon--delete'/>
            </span>
      </li>
    );
}

export default Item;