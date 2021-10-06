import React from 'react';
import Header from "../Header"

const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <div className="container py-4">
                {children}
            </div>
        </div>
    );
};

export default Layout;