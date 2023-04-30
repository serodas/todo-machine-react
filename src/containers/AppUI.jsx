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
    return (
       <main className='AppUI'>
            <Counter />
            <Search/>
            <List>
                {state.itemsSearched.map(item => (
                    <Item text={item.text} key={item.text}/>
                ))}
            </List>

            <CreateButton />
       </main> 
    );
}

export default AppUI;