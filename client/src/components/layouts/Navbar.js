import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <h1><i className="fas fa-glass-cheers"/> e-Vites</h1>
                <p>Planning one Owambe at a time</p>
            </div>
            <ul>
                <li>Hello, John</li>
                <span className="sm-hide">|</span>
                <li>
                    <a href="#!">
                        <span className="sm-hide">Logout</span>
                        <i className="fas fa-sign-out-alt"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;