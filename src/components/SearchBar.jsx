import React from "react"
import "./styles.css"

export const SearchBar = () =>{
    return(
        <>
            <input placeholder="Search by name, email or role" type="text" name="search" id="search-box" className="SearchBar"  />
        </>
    )
}