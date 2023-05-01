import React from 'react';
import '../styles/List.css';

const List = (props) => {
    return (
        <section>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.filterItems.length ) && props.onEmpty()}
            <ul>
                {props.filterItems.map(props.render)}
            </ul>
      </section>
    );
}

export default List;