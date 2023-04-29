import React from 'react';

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