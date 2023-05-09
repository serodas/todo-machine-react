import React from 'react';
import '../styles/LoadingEditForm.css';

const LoadingEditForm = () => {
  return (
    <div className='LoadingEditForm'>
      <h2> Editar Tarea</h2>
      <div className='LoadingEditForm__form-container'>
          <p className='LoadingEditForm__text'></p>
          <div className='LoadingEditForm__actions'>
              <span className='LoadingEditForm__actions--cancel'></span>
              <span className='LoadingEditForm__actions--success'></span>
          </div>
      </div>
    </div>
  );
}

export default LoadingEditForm;