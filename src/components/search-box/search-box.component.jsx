//search-box.component.jsx
//We will use a functional component for the search box functionality.
import React from "react";
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input className='search' type="search" placeholder={placeholder} onChange={handleChange} />
);
