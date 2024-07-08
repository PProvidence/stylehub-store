import React from 'react';
import { Link } from "react-router-dom";
import backIcon from "../assets/img/chevron-left.svg"

const All: React.FC = () => {
    return (
        <Link to="/">
            <img src={backIcon} alt="" />      
        </Link>
    );
};

export default All;