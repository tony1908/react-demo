import React from 'react';
import './search.css'

// function Search(props) {
//     return (
        
//     )
// }

const Search = (props) => {
    return (
        <form className="Search" action="">
            <input 
                type="text" 
                placeholder="Busca tu video favorito"
                className="Search-input"
            />
        </form>
    )
}

export default Search;