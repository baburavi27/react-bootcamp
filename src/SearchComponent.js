import { useState } from 'react';
import data from './data.json';

const SearchDetails = (searchText) => {
    return data.filter((res) => 
       res.name.toLowerCase().includes(searchText.toLowerCase()) ||  res.currentRole.toLowerCase().includes(searchText.toLowerCase())
    );
}

const SearchComponent = ({ setFilteredPersons }) => {
    const [searchText, setSearchtext] = useState('');
    return (
        <div className="search">
            <form onSubmit={(e) => {
                e.preventDefault();
                const searchresults = SearchDetails(searchText);
                setFilteredPersons(searchresults);
            }}>
                <input id="search" placeholder="search" value={searchText}
                    onChange={(e) => {
                        setSearchtext(e.target.value);
                    }}></input>
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchComponent;