import React from 'react';
import SearchInput from '../Interact/SearchInput';
import ExpansibleList from '../Button/ExpansibleList';
import IconText from '../Button/IconText';

const Header: React.FC = () => {
  return (
    <header>
            <div className="container">
                <div className="logo-area">
                    <img src="kharitaslogo.png" alt="kharitas" />
                </div>
                <div className="search-area">
                    <ExpansibleList />
                    <SearchInput />
                </div>
                <nav className="shop">
                    <IconText />
                    <IconText />
                    <IconText />
                </nav>
            </div>
        </header>
  );
};

export default Header;
