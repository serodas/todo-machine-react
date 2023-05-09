import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInitialState from '../hooks/useInitialState';
import CreateButton from '../components/CreateButton';
import Counter from '../components/Counter';
import Search from '../components/Search';
import Item from '../components/Item';
import Loading from '../components/Loading';
import ErrorItem from '../components/ErrorItem';
import Empty from '../components/Empty';
import List from '../containers/List';
import EmptyResults from '../components/EmptyResults';
import Header from '../containers/Header';
import { ChangeAlert } from '../components/ChangeAlert';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const { 
    items,
    completeItem,
    deleteItem,
    searchValue,
    setSearchValue,
    error,
    loading,
    sincronizeItemsLocalStorage,
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

  return (
    <main className='Home'>
            <Header loading={loading}>
              <Counter 
                totalItems={totalItems} 
                totalItemsCompleted={totalItemsCompleted}
              />
              <Search 
                setSearchValue={setSearchValue}
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
                  id={item.id}
                  text={item.text} 
                  completed={item.completed}
                  onComplete={completeItem}
                  onDelete={deleteItem}
                  onEdit={() => navigate(`/edit/${item.id}`,{
                    state: { item }
                  })} 
                  key={item.id}
                />
              )}
            />
            <CreateButton 
              onClick={() => navigate('/new')}
            />
            <ChangeAlert
              sincronize={sincronizeItemsLocalStorage}
            />
       </main> 
  );
}

export default Home;
