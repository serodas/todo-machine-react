import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

// const todos = [
//     { text: 'Leer un libro', completed: false },
//     { text: 'Bañar al perro', completed: false },
//     { text: 'Ver una pelicula', completed: true }
// ];

const useInitialState = () => {
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const {
        items,
        saveItemsLocalStorage,
        loading,
        error,
        sincronizeItemsLocalStorage,
    } = useLocalStorage('ITEMS', []);

    const addItem = (itemValue) => {
        const newItems = [...items];
        newItems.push({
            id: Date.now().toString(16),
            text: itemValue,
            completed: false,
        });
        saveItemsLocalStorage(newItems);
    };

    const editItem = (id, newText) => {
        const indexItem = items.findIndex(item => item.id === id);
        const newItems = [...items];
        newItems[indexItem].text = newText;
        saveItemsLocalStorage(newItems);
    };

    const getItem = (id) => {
        const indexItem = items.findIndex(item => item.id === id);
        return items[indexItem];
    };

    const completeItem = (id) => {
        const newItems = [...items];
        const indexItem = newItems.findIndex((item) => item.id === id);
        newItems[indexItem].completed = !newItems[indexItem].completed;
        saveItemsLocalStorage(newItems);
    };

    const deleteItem = (id) => {
        const newItems = [...items];
        const indexItem = newItems.findIndex((item) => item.id === id);
        newItems.splice(indexItem, 1);
        saveItemsLocalStorage(newItems);
    };

    return {
        items,
        addItem,
        editItem,
        getItem,
        completeItem,
        deleteItem,
        loading,
        error,
        searchValue,
        setSearchValue,
        openModal,
        setOpenModal,
        sincronizeItemsLocalStorage,
    }
}

export default useInitialState;