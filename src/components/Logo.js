import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="logo">
                <Link to="/">
                    <img src={require("../assets/img/logo.png").default} 
                        alt="Fisheye Home page" />
                </Link>
            </div>
    );
};

export default Logo;