import React from 'react';

const EmptyResults = ({searchText}) => {
    return (
        <p>No hay resultados para {searchText}</p>
    );
}

export default EmptyResults;