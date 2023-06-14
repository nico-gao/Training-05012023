import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="searchbook" >search</NavLink>
                </li>
                <li>
                    <NavLink to="/wishlist" >wishlist</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
