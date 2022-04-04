import React from "react";
import { NavLink } from "react-router-dom";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import NavPicture from "../NavPicture/NavPicture";
import './NavBar.css';

const navBar = ( props ) => {
    return (
        <Aux>
        <header className="Header">
            <div>
                <h3 className="Header1">De-jerry</h3>
                <p className="Header2">INTERBIZZ (NIG) LTD.</p>
                </div>

                <li className="NavigationItem">
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                </li>
        </header>
        <NavPicture />
        </Aux>
    )
}

export default navBar;