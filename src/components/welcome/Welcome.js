import React from 'react'
import './welcome.css';

export default function Welcome() {
    return (
        <div id="welcome-container">
            <h4 className="welcome-text">Welcome, Guest</h4>
            <h5 className="login-text">Please login to continue</h5>
        </div>
    )
}
