import React from 'react';
import '../styles/Item.css';

const Item = (props) => {
    return (
        <li className="Item">
            👍
            <p
                className='Item-p'
            >
                {props.text}
            </p>
            x
      </li>
    );
}

export default Item;