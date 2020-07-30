import React from 'react';
import {useSelector} from 'react-redux';
import './header.css';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faSignInAlt} from '@fortawesome/free-solid-svg-icons'

const Header = ({logoRef})=>{
    const login = useSelector((store)=>store.login);
    const disabled = !login.isAuthenticated?"disabled":"";
    const activeStyle={
        borderBottom: "3px solid #46D7FE"
    }
    return (
        <div id="header">
            <div className="header-item logo-container">
                <Link to="/" className="logo-text" ref={logoRef}>LearnQnA</Link>
            </div>
            <div className="header-item nav-container">
                <NavLink to="/" exact={true} className={'nav-link'} activeStyle={activeStyle}>
                    Home
                </NavLink>
                <NavLink to="/previousSubmission" exact={true} className={`nav-link ${disabled}`} activeStyle={activeStyle}>
                    Last Submission
                </NavLink>
                {
                !login.isAuthenticated?
                    <NavLink to="/login" className="nav-link" activeStyle={activeStyle}>
                         <span className="sign-auth-text">Login</span>
                        <FontAwesomeIcon icon={faSignInAlt}/>
                    </NavLink>:
                    <div className="user-profile-container">
                        <Link to="/login/noauth" className="nav-link">
                            <span className="sign-auth-text">Sign Out</span>
                            <FontAwesomeIcon icon={faSignOutAlt}/>
                        </Link>
                        <span className="user-profile">{login.user?.username.charAt(0).toUpperCase()}</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Header;