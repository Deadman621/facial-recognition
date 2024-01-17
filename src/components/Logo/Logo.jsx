import React from "react";
import Tilt from 'react-parallax-tilt';
import "./Logo.css";
import logo from './Logo-main.png'

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt options={{ max: 55 }} style={{ height: 100, width: 100 }}>
                <div className="" style={{ height: '100px', width: '100px'}}>
                    <img style={{paddingTop: '5px'}} src={logo} alt="Logo"/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo