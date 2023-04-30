import React, { useContext } from 'react';
import CreateButton from '../components/CreateButton';
import Counter from '../components/Counter';
import Search from '../components/Search';
import List from './List';
import Item from '../components/Item';
import AppContext from '../context/AppContext';
import '../styles/AppUI.css';

const AppUI = () => {
    const { state, addState } = useContext(AppContext);
    const totalItems = state.items.length;
    const totalItemsCompleted = state.items.filter((item) => item.completed).length;

    let filterItems = [];
    if(state.searchValue.length === 0) {
        filterItems = state.items;
    } else {
        filterItems = state.items.filter((item) => {
            return item.text.toLowerCase().includes(state.searchValue.toLowerCase());
        });
    }

    const onSearch = (event) => {
        const onSearchValue = event.currentTarget.value;
        addState({
            ...state,
            searchValue: onSearchValue,
        });
    };

    return (
       <main className='AppUI'>
            <Counter totalItems={totalItems} totalItemsCompleted={totalItemsCompleted}/>
            <Search onSearch={onSearch}/>
            <List>
                {filterItems.map(item => (
                    <Item text={item.text} completed={item.completed} key={item.text}/>
                ))}
            </List>

            <CreateButton />
       </main> 
    );
}

export default AppUI;