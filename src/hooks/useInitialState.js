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
        error
    } = useLocalStorage('ITEMS', []);

    return {
        items,
        saveItemsLocalStorage,
        loading,
        error,
        searchValue,
        setSearchValue,
        openModal,
        setOpenModal
    }
}

export default useInitialState;