import React, { useState } from 'react';
import search from '../assets/search.png';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div 
      style={{ 
        marginTop: '20px',
        display: 'flex', 
        alignItems: 'center', 
        background: '#f7f7f7',
        padding: '5px', 
        borderRadius: '10px',
        height: '52px'
      }}>
      <img src={search} alt="Search Icon" 
        style={{ 
          width: '30px',
          height: '30px',
          marginLeft: '10px'
      }} />
      <input type="text" placeholder="Search address, or near you" value={searchQuery} onChange={handleInputChange}
        style={{
          padding: '10px',
          background: '#f7f7f7',
          height: '100%',
          width: '100%',
          border: 'none', 
          marginLeft: '10px',
          outline: 'none',
          fontSize: '16px'
      }} />
    </div>
  );
};

export default SearchBar;