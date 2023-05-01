import React from 'react';
import '../styles/CreateButton.css';

const CreateButton = ({setOpenModal}) => {
    const handleClick = () => {
        setOpenModal(prevState => !prevState);
    };
    return (
        <button 
            className="CreateButton"
            onClick={handleClick}
        >+</button>
    );
}

export default CreateButton;