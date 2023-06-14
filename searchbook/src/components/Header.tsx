import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul className="nav-list">
                    <li>
                        <NavLink to="searchbook" >search</NavLink>
                    </li>
                    <li>
                        <NavLink to="/wishlist" >wishlist</NavLink>
                    </li>
                </ul>
            </nav>
        </header>

    );
};

export default Header;
