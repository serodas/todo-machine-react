import React from 'react';
import useInitialState from '../hooks/useInitialState';
import CreateButton from '../components/CreateButton';
import Counter from '../components/Counter';
import Search from '../components/Search';
import Item from '../components/Item';
import Form from '../components/Form';
import Loading from '../components/Loading';
import ErrorItem from '../components/ErrorItem';
import Empty from '../components/Empty';
import List from '../containers/List';
import Modal from '../containers/Modal';
import '../styles/App.css';

function App() {
  const { 
    items, 
    saveItemsLocalStorage,
    searchValue,
    setSearchValue,
    openModal,
    setOpenModal,
    error,
    loading,
   } = useInitialState();

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
    <main className='App'>
            <Counter totalItems={totalItems} totalItemsCompleted={totalItemsCompleted}/>
            <Search onSearch={onSearch}/>
            <List>
                {error && <ErrorItem></ErrorItem> }
                {loading && <Loading></Loading>}
                {(!loading && !filterItems.length) && <Empty></Empty>}

                {filterItems.map(item => (
                    <Item
                      items={items}
                      saveItemsLocalStorage={saveItemsLocalStorage}
                      text={item.text} 
                      completed={item.completed} 
                      key={item.text}
                    />
                ))}
            </List>

            {openModal && (
                <Modal>
                    <Form 
                        items={items}
                        saveItemsLocalStorage={saveItemsLocalStorage}
                        setOpenModal={setOpenModal}
                    />
                </Modal> 
            )}
            <CreateButton 
                setOpenModal={setOpenModal}
            />
       </main> 
  );
}

export default App;
