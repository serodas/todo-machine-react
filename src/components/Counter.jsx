import React from 'react';
import '../styles/Counter.css';

const Counter = ({totalItems, totalItemsCompleted, loading}) => {
    return (
        <h2 className={`Counter ${loading ? 'Counter--loading' : ''}`}>
            Has completado {totalItemsCompleted} de {totalItems} TODOs
        </h2>
    );
}

export default Counter;