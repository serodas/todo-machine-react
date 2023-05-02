import React from 'react';
import '../styles/List.css';

const List = (props) => {
    return (
        <section>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalItems ) && props.onEmpty()}
            {(props.totalItems > 0 && !props.filterItems.length) && props.onEmptyResults(props.searchValue)}
            <ul>
                {(!props.loading && !props.error) && props.filterItems.map(props.render)}
            </ul>
      </section>
    );
}

export default List;