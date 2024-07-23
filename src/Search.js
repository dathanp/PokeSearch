import React, {useState} from 'react';

const Search = ({onSearch}) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        onSearch(query);
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search Pokemon'
                />
                <button type="submit">Search</button>
        </form>
    );
}

export default Search;