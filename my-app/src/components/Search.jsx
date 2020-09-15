import React from 'react';
import { useEffect } from 'react';


function Search(){
    useEffect(() => {
        console.log('useEffect was called!');
    })

    return(
        <p>This is Search component</p>
    );
}

export default Search;