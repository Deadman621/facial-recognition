import React from "react";
import './Navigation.css'

const Navigation = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn) {
            return ( 
                <nav>
                    <button onClick={() => onRouteChange('signout')} type="button" className="button nav1" /* "btn btn-gprimary btn-l" */>
                    <span className="button-text">Sign Out</span>
                    <div className="fill-container"></div>
                    </button>    
                </nav> )
        } else {
            return (
                <nav className="nav2">
                    <button onClick={() => onRouteChange('signin')} type="button" className="space button">
                        <span className="button-text">Sign In</span>
                        <div className="fill-container"></div>    
                    </button>    
                    <button onClick={() => onRouteChange('register')} type="button" className="button">
                        <span className="button-text">Register</span>
                        <div className="fill-container"></div>    
                    </button>    
                </nav> )
        }
}

export default Navigation