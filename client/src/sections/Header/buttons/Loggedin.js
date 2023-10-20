import React from "react";

const LoggedinButton = (props) => {

  function loggedout(){
    localStorage.removeItem('LoginState');
    localStorage.removeItem('token');
    props.togglelog();
    window.location.href = "/"
  }

  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-secondary btn-sm"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.fullname}
      </button>
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="visually-hidden">Toggle Dropdown</span>
      </button>

      <ul className="dropdown-menu">
        <li>
          <p className="dropdown-item" onClick={()=>{props.setcontainer('profile')}}>Profile</p>
        </li>
        <li>
          <p className="dropdown-item" onClick={()=>{props.setcontainer('bookmarks')}}>Bookmarks</p>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <p className="dropdown-item" onClick={loggedout}>Logout</p>
        </li>
      </ul>
    </div>
  );
};

export default LoggedinButton;
