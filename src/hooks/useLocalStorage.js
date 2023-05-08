import { useEffect, useReducer } from 'react';

const initialState = ({ initialValue }) => ({
    items: initialValue,
    loading: true,
    error: false,
    sincronizedItems: true,
});

const actionTypes = {
    error: 'ERROR',
    success: 'SUCCESS',
    save: 'SAVE',
    sync: 'SYNC',
};

const reducerObject = (state, payload) => ({
    [actionTypes.error]: {
        ...state,
        error: true
    },
    [actionTypes.success]: {
        ...state,
        items: payload,
        loading: false,
        error: false,
        sincronizedItems: true
    },
    [actionTypes.save]: {
        ...state,
        items: payload,
    },
    [actionTypes.sync]: {
        ...state,
        loading: true,
        sincronizedItems: false
    },
});

const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
};

const useLocalStorage = (name, initialValue) => {
    const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));

    const {
        items,
        loading,
        error,
        sincronizedItems
    } = state;

    const onError = (error) => dispatch({ type: actionTypes.error, payload: error });
    const onSuccess = (items) => dispatch({ type: actionTypes.success, payload: items });
    const onSave = (items) => dispatch({ type: actionTypes.save, payload: items });
    const onSync = () => dispatch({ type: actionTypes.sync });

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
                onSuccess(parsedValue);
            } catch (error) {
                onError(error);
            }
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sincronizedItems]);

    const saveItemsLocalStorage = (items) => {
        const stringifiedItems = JSON.stringify(items);
        localStorage.setItem(name, stringifiedItems);
        onSave(items);
    };

    const sincronizeItemsLocalStorage = () => {
        onSync();
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