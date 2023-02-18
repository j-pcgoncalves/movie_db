import React, { useState } from "react";

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = e => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = e => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <form className="search">
            <div className="search_container">
                <input 
                    value={searchValue}
                    onChange={handleSearchInputChanges}
                    type="text"
                />
                <input 
                    onClick={callSearchFunction} 
                    type="submit" 
                    value="Search" 
                />
            </div>
        </form>
    );
}

export default Search;