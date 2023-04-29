import React from 'react';
import CreateButton from '../components/CreateButton';
import Counter from '../components/Counter';
import Search from '../components/Search';
import List from './List';
import Item from '../components/Item';

const AppUI = () => {
    return (
       <>
            <Counter />
            <Search/>

            <List>
                <Item text={'Hola Mundo'}/>
            </List>

            <CreateButton />
       </> 
    );
}

export default AppUI;