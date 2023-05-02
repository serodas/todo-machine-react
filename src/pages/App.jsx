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
import EmptyResults from '../components/EmptyResults';
import Header from '../containers/Header';

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
            <Header loading={loading}>
              <Counter 
                totalItems={totalItems} 
                totalItemsCompleted={totalItemsCompleted}
              />
              <Search 
                onSearch={onSearch}
              />
            </Header>
            <List
              searchValue={searchValue}
              totalItems={totalItems} 
              error={error}
              loading={loading}
              filterItems={filterItems}
              onError={() => <ErrorItem />}
              onLoading={() => <Loading />}
              onEmpty={() => <Empty />}
              onEmptyResults={(searchText) => <EmptyResults searchText={searchText} />}
              render={(item) => (
                <Item 
                  items={items}
                  saveItemsLocalStorage={saveItemsLocalStorage}
                  text={item.text} 
                  completed={item.completed} 
                  key={item.text}
                />
              )}
            />
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
