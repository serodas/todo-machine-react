import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useInitialState from '../hooks/useInitialState';
import FormItem from '../components/FormItem';
import LoadingEditForm from '../components/LoadingEditForm';

const Edit = () => {
    const location = useLocation();
    const params = useParams();
    const id = params.id;
    const { editItem, getItem, loading } = useInitialState();

    let itemText;
    if(location.state?.item) {
        itemText = location.state.item.text;
    }else if(loading) {
        return <LoadingEditForm />
    } else {
        const item = getItem(id);
        itemText = item.text;
    }

    return (
        <FormItem
            submitEvent={(text) => editItem(id, text)}
            defaultText={itemText}
            labelText="Editar tarea"
            buttonText="Editar"
        />
    );
}

export default Edit;