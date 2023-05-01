import React, { useContext } from 'react';
import CreateButton from '../components/CreateButton';
import Counter from '../components/Counter';
import Search from '../components/Search';
import List from './List';
import Item from '../components/Item';
import AppContext from '../context/AppContext';
import Modal from './Modal';
import Form from '../components/Form';
import Loading from '../components/Loading';
import ErrorItem from '../components/ErrorItem';
import Empty from '../components/Empty';
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
                {error && <ErrorItem></ErrorItem> }
                {loading && <Loading></Loading>}
                {(!loading && !filterItems.length) && <Empty></Empty>}

                {filterItems.map(item => (
                    <Item text={item.text} completed={item.completed} key={item.text}/>
                ))}
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