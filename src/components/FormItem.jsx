import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FormItem.css';

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
            <h2>{props.labelText}</h2>
            <form onSubmit={onSubmit}>
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
                    >
                        {props.buttonText}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormItem;