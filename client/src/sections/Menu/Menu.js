import React, { useState } from "react";
import LoadingSpinner from '../../components/LoadingSpinner';
import MenuItem from '../../components/MenuItem'; // Import the MenuItem component

const Menu = (props) => {
  const [selectedLink, setSelectedLink] = useState('category/general');
  const [isLoading, setIsLoading] = useState(false);

  function handleClick(path) {
    setIsLoading(true);
    setSelectedLink(path);
    props.setedpt(path);
    setTimeout(() => {setIsLoading(false);}, 500);
  }

  return (
    <div className="nav-scroller py-1 mb-3 border-bottom">
      {isLoading && <LoadingSpinner />}

      <nav className="nav nav-underline justify-content-between">
        <MenuItem selectedLink={selectedLink} onClick={handleClick} path="category/general" label="Home"/>
        <MenuItem selectedLink={selectedLink} onClick={handleClick} path="search/world" label="World"/>
        <MenuItem selectedLink={selectedLink} onClick={handleClick} path="search/india" label="India"/>
        <MenuItem selectedLink={selectedLink} onClick={handleClick} path="category/science" label="Science"/>
        <MenuItem selectedLink={selectedLink} onClick={handleClick} path="category/technology" label="Technology"/>
        <MenuItem selectedLink={selectedLink} onClick={handleClick} path="category/sport" label="Sport"/>
        <MenuItem selectedLink={selectedLink} onClick={handleClick} path="category/business" label="Business"/>
        <MenuItem selectedLink={selectedLink} onClick={handleClick} path="category/entertainment" label="Entertainment"/>
        <MenuItem selectedLink={selectedLink} onClick={handleClick} path="category/health" label="Health"/>
      </nav>
    </div>
  );
};

export default Menu;
