import React from 'react';
import '../styles/Form.css';

const Form = ({ items, saveItemsLocalStorage, setOpenModal }) => {
    const [ newItemValue, setNewItemValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        const newItems = [...items];
        newItems.push({
            id: Date.now().toString(16),
            text: newItemValue,
            completed: false,
        });
        saveItemsLocalStorage(newItems);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewItemValue(event.currentTarget.value);
    };

    return (
        <div className='Form_content'>
            <form onSubmit={onSubmit}>
                <label htmlFor=""></label>
                <textarea 
                    placeholder="Escribe tu tarea"
                    value={newItemValue}
                    onChange={onChange}
                />
                <div className="Form-buttonContainer">
                    <button 
                        type='button'
                        onClick={onCancel}
                        className="Form-button Form-button--cancel"
                    > Cancelar </button>
                    <button 
                        type='submit'
                        className="Form-button Form-button--add"
                    >Crear</button>
                </div>
            </form>
        </div>
    );
}

export default Form;