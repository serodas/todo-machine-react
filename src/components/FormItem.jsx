import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Form.css';

const FormItem = (props) => {
    const [ newItemValue, setNewItemValue] = React.useState(props.defaultText || '');

    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        props.submitEvent(newItemValue);
        navigate('/');
    };
    
    const onCancel = () => {
        navigate('/');
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

export default FormItem;