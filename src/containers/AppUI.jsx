import React, { useContext } from 'react';
import CreateButton from '../components/CreateButton';
import Counter from '../components/Counter';
import Search from '../components/Search';
import List from './List';
import Item from '../components/Item';
import AppContext from '../context/AppContext';
import '../styles/AppUI.css';

const AppUI = () => {
    const { state } = useContext(AppContext);
    const totalItems = state.items.length;
    const totalItemsCompleted = state.items.filter((item) => item.completed).length;
    
    return (
       <main className='AppUI'>
            <Counter totalItems={totalItems} totalItemsCompleted={totalItemsCompleted}/>
            <Search/>
            <List>
                {state.itemsSearched.map(item => (
                    <Item text={item.text} completed={item.completed} key={item.text}/>
                ))}
            </List>

            <CreateButton />
       </main> 
    );
}

export default AppUI;