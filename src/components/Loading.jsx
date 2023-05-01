import React from 'react';
import '../styles/Loading.css';

const Loading = () => {
  return (
    <>
      <div className="Loading__container">
          <span className="Loading__icon--complete"></span>
          <p className="Loading__text">Cargando...</p>
          <span className="Loading__icon--delete"></span>
      </div>
      <div className="Loading__container">
          <span className="Loading__icon--complete"></span>
          <p className="Loading__text">Cargando...</p>
          <span className="Loading__icon--delete"></span>
      </div>
    </>
  );
}

export default Loading;