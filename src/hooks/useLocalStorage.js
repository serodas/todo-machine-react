import React, { useEffect } from 'react';

const useLocalStorage = (name, initialValue) => {
    const [items, setItems] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

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
            } catch (error) {
                setError(error);
            }
        }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const saveItemsLocalStorage = (items) => {
        const stringifiedItems = JSON.stringify(items);
        localStorage.setItem(name, stringifiedItems);
        setItems(items);
    };

    return {
        items,
        saveItemsLocalStorage,
        loading,
        error
    };
}

export default useLocalStorage;