import React from 'react';

const Item = (props) => {
    return (
        <li className="TodoItem">
            <p
            className='TodoItem-p'
            >
            {props.text}
            </p>
            x
      </li>
    );
}

export default Item;