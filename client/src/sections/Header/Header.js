import React from 'react';
import Search from './Search';
import Usermain from './Usermain';

const Header = (props) => {
    return (
        <header className="border-bottom lh-1 py-3">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-4 pt-1">
                <div className="logo">D A I L Y N E W S</div>
              </div>
              <div className="col-4 d-flex justify-content-center">
                <Search findsearch={props.setedpt} />
              </div>
              <div className="col-4 d-flex align-items-center justify-content-end">
                <Usermain setcontainer = {props.setcontainer} fullname = {props.fullname} onLoginSuccess = {props.onLoginSuccess}/>
              </div>
            </div>
          </div>
        </header>
    );
};

export default Header;
