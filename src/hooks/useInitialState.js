import { useState } from 'react';

const todos = [
    { text: 'Leer un libro', completed: false },
    { text: 'Bañar al perro', completed: false },
    { text: 'Ver una pelicula', completed: false }
];

const initialState = {
    items: todos,
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addState = (payload) => {
        setState(payload);
    };

    return {
        state,
        addState,
    }
}

export default useInitialState;