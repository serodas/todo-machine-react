import React from 'react';
import FormItem from '../components/FormItem';
import useInitialState from '../hooks/useInitialState';

const New = () => {
    const { addItem } = useInitialState();

    return (
        <FormItem submitEvent={(text) => addItem(text)}/>
    );
}

export default New;