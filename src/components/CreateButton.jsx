import React from 'react';
import '../styles/CreateButton.css';

const CreateButton = (props) => {
    return (
        <button 
            className="CreateButton"
            onClick={props.onClick}
        >+</button>
    );
}

export default CreateButton;