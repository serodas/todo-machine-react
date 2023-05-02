import React from 'react';
import '../styles/Search.css';

const Search = ({onSearch, loading}) => {
    return (
        <input
            className="Search"
            placeholder="Buscar..."
            onChange={onSearch}
            disabled={loading}
        />
    );
}

export default Search;