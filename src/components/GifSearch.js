import React from 'react'

function Gifsearch(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input 
                type="text" 
                name="search" 
                onChange={props.onChange}
                placeholder="search"
            />
            <button>Search</button>
        </form>

    )
}

export default Gifsearch