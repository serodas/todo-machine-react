import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/Search.css';

const Search = ({setSearchValue,loading}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const valueParams = searchParams.get('search');

    useEffect(() => {
        if(valueParams) {
            setSearchValue(valueParams);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSearch = (event) => {
        setSearchValue(event.target.value)
        setSearchParams({ search: event.target.value })
    }

    return (
        <input
            className="Search"
            placeholder="Buscar..."
            onChange={onSearch}
            value={valueParams ?? ''}
            disabled={loading}
        />
    );
}

export default Search;