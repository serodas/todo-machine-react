import React from 'react';
import useStorageListener from '../hooks/useStorageListener';
import '../styles/ChangeAlert.css';

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  
  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Hubo cambios en las tareas en otra pestaña o ventana del navegador.</p>
          <p>¿ Quieres sincronizar tus tareas ?</p>
          <button
            className="Form-button Form-button--add"
            onClick={toggleShow}
          >
            Yes!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };