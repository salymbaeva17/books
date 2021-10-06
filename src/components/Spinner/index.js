import React from 'react';
import "./style.css"

const Spinner = () => {
    return (
        <div className="scaling-squares-spinner">
            <div className="square"/>
            <div className="square"/>
            <div className="square"/>
            <div className="square"/>
        </div>
    );
};

export default Spinner;