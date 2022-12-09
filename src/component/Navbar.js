

import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <NavLink to='/'>
            <i className="fa-solid fa-house"></i>
            <button>Home</button>
            </NavLink>
            
        </div>
    );
}

export default Navbar;
