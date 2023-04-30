import React from 'react';
import '../styles/List.css';

const List = (props) => {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
      </section>
    );
}

export default List;