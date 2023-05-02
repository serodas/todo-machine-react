import React, { useEffect } from 'react';

const useLocalStorage = (name, initialValue) => {
    const [items, setItems] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [sincronizedItems, setSincronizedItems] = React.useState(true);

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageValue = localStorage.getItem(name);
                let parsedValue;
                if (!localStorageValue) {
                    localStorage.setItem(name, JSON.stringify(initialValue));
                    parsedValue = initialValue;
                } else {
                    parsedValue = JSON.parse(localStorageValue);
                }
                setItems(parsedValue);
                setLoading(false);
                setSincronizedItems(true);
            } catch (error) {
                setError(error);
            }
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sincronizedItems]);

    const saveItemsLocalStorage = (items) => {
        const stringifiedItems = JSON.stringify(items);
        localStorage.setItem(name, stringifiedItems);
        setItems(items);
    };

    const sincronizeItemsLocalStorage = () => {
        setLoading(true);
        setSincronizedItems(false);
    };

    return {
        items,
        saveItemsLocalStorage,
        loading,
        error,
        sincronizeItemsLocalStorage
    };
}

export default useLocalStorage;