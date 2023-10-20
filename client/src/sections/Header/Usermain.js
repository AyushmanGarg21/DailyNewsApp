import React, { useState } from 'react';
import LoggedinButton from  './buttons/Loggedin'
import LoggedOutButton from  './buttons/Loggedout'
const Usermain = (props) => {
  const [islogged, setlogin] = useState(localStorage.getItem('LoginState'));

  const togglelog = () => {
    setlogin(!islogged);
  };
  return (
    <div className="sign-in-sign-up">
      {islogged ? (
          <LoggedinButton togglelog = {togglelog} setcontainer = {props.setcontainer} fullname = {props.fullname} />
      ) : 
      (
        <LoggedOutButton togglelog = {togglelog} onLoginSuccess = {props.onLoginSuccess} />
      )}
    </div>
  );
};

export default Usermain;
