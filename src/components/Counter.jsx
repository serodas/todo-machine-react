import React from 'react';
import '../styles/Counter.css';

const Counter = ({totalItems, totalItemsCompleted}) => {
    return (
        <h2 className="Counter">Has completado {totalItemsCompleted} de {totalItems} TODOs</h2>
    );
}

export default Counter;