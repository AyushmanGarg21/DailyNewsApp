import React from "react";

const MenuItem = ({ selectedLink, onClick, path, label }) => (
  <p
    className={`nav-item nav-link link-body-emphasis ${selectedLink === path && "active"}`}
    onClick={() => onClick(path)}
  >
    {label}
  </p>
);

export default MenuItem;
