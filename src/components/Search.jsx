import React from 'react';
import '../styles/Search.css';

const Search = ({onSearch}) => {
    return (
        <input
            className="Search"
            placeholder="Buscar..."
            onChange={onSearch}
        />
    );
}

export default Search;