import React from 'react';
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Books</a>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">HomePage</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link" href="#">Cart</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Header;