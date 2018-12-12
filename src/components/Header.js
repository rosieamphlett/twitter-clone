import React from 'react';

const Header = () => {
    return (
        <div>
            <header className="header">
                <ul className="header-left">
                    <li className="glyphicon glyphicon-home"> 
                        <i className="nav-name">Home</i></li>
                    <li className="glyphicon glyphicon-flash"> 
                        <i className="nav-name">Moments</i></li>
                    <li className="glyphicon glyphicon-bell"> 
                        <i className="nav-name">Notifications</i></li>
                    <li className="glyphicon glyphicon-envelope"> 
                        <i className="nav-name">Messages</i></li>
                </ul>

                <div className="header-right">
                    <div className="form-group">
                        <input type="text" placeholder="Search Twitter"/>
                        <span className="glyphicon glyphicon-search"></span>
                    </div>

                    <img className="user" src= {require('../defaultUser.png')} alt="user" />
                    <button type="button"> Tweet </button>
                </div>
            </header>
        </div>
    );
};

export default Header;