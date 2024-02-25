import React from 'react';

const SearchInput: React.FC = () => {
  return (
    <div className="search-input">
        <div className="search-input-space">
            <input type="text" placeholder="search"/>
        </div>
        <div className="search-icon">
            <img src="magnifying-glass.svg" alt="maglass"/>
        </div>
    </div>
  );
};

export default SearchInput;
