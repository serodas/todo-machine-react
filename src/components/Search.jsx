import React, { useContext } from 'react';
import '../styles/Search.css';
import AppContext from '../context/AppContext';

const Search = () => {
    const { state, addState } = useContext(AppContext);
    
    const onSearch = (event) => {
        const onSearchValue = event.currentTarget.value;
        console.log(onSearchValue.length)
        let filterItems = [];
        if(onSearchValue.length === 0) {
            filterItems = state.items;
        } else {
            filterItems = state.items.filter((item) => {
                return item.text.toLowerCase().includes(onSearchValue.toLowerCase());
            });
        }
        addState({
            ...state,
            itemsSearched: filterItems,
        });
    };
    return (
        <input
            className="Search"
            placeholder="Buscar..."
            onChange={onSearch}
        />
    );
}

export default Search;