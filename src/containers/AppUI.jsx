import React, { useContext } from 'react';
import CreateButton from '../components/CreateButton';
import Counter from '../components/Counter';
import Search from '../components/Search';
import List from './List';
import Item from '../components/Item';
import AppContext from '../context/AppContext';
import Modal from './Modal';
import Form from '../components/Form';
import '../styles/AppUI.css';

const AppUI = () => {
    const { items, loading, error, searchValue, setSearchValue, openModal, setOpenModal } = useContext(AppContext);
    const totalItems = items.length;
    const totalItemsCompleted = items.filter((item) => item.completed).length;

    let filterItems = [];
    if(searchValue.length === 0) {
        filterItems = items;
    } else {
        filterItems = items.filter((item) => {
            return item.text.toLowerCase().includes(searchValue.toLowerCase());
        });
    }

    const onSearch = (event) => {
        const onSearchValue = event.currentTarget.value;
        setSearchValue(onSearchValue);
    };

    return (
       <main className='AppUI'>
            <Counter totalItems={totalItems} totalItemsCompleted={totalItemsCompleted}/>
            <Search onSearch={onSearch}/>
            <List>
                {error && <p>Hubo un error</p> }
                {loading && <p>cargando..</p>}
                {(!loading && !filterItems.length) &&  <p>¡Crea tu primer TODO!</p>}

                {!loading && filterItems.length > 0 && ( 
                    filterItems.map(item => (
                        <Item text={item.text} completed={item.completed} key={item.text}/>
                    ))
                )}
            </List>

            {openModal && (
                <Modal>
                    <Form />
                </Modal> 
            )}
            <CreateButton 
                setOpenModal={setOpenModal}
            />
       </main> 
    );
}

export default AppUI;