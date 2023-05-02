import React from 'react';

const useStorageListener = (sincronize) => {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
        if (change.key === 'ITEMS') {
            setStorageChange(true);
        }
    });

    const toggleShow = () => {
        sincronize();
        setStorageChange(false);
    };

    return {
        show: storageChange,
        toggleShow,
    };
}

export default useStorageListener;