import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
                <a href="./index.html">
                    <img src={require("../assets/img/logo.png").default} 
                        alt="Fisheye Home page" />
                </a>
            </div>
    );
};

export default Logo;