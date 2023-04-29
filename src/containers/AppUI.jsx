import React, { useContext } from 'react';
import CreateButton from '../components/CreateButton';
import Counter from '../components/Counter';
import Search from '../components/Search';
import List from './List';
import Item from '../components/Item';
import AppContext from '../context/AppContext';

const AppUI = () => {
    const { state } = useContext(AppContext);
    return (
       <>
            <Counter />
            <Search/>
            <List>
                {state.items.map(item => (
                    <Item text={item.text} key={item.text}/>
                ))}
            </List>

            <CreateButton />
       </> 
    );
}

export default AppUI;