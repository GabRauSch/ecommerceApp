import React from 'react';

const ExpansibleList: React.FC = () => {
  return (
    <div className="search-filter">
        <img src="menu.svg" alt="menu"/>
        <div className="filter-text">Todas</div>
        <div className="open-menu">›</div>
    </div>
  );
};

export default ExpansibleList;



