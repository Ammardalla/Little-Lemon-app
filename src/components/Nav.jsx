import { NavLink } from "react-router-dom";
function Nav(){
    return(
        <nav id="main-nav">
            <img src={`${process.env.PUBLIC_URL}/img/logo.jpg`} alt="The logo for the little lemon restaurant" id="logo" />
            <ul>
                <li>
                <NavLink
                to="/"
className={({ isActive }) => `dekor ${isActive ? "active" : ""}`}                >
                Home
                </NavLink>
                </li>                
                <li><a href="#about">About</a></li>
                <li>
                <NavLink
                to="/Menu"
className={({ isActive }) => `dekor ${isActive ? "active" : ""}`}                >
                Menu
                </NavLink>
                </li>
                <li>                
                <NavLink
                to="/BookingPage"
className={({ isActive }) => `dekor ${isActive ? "active" : ""}`}                >
                Reservation
                </NavLink>
                </li>
                <li>                
                <NavLink
                to="/NotCooded"
className={({ isActive }) => `dekor ${isActive ? "active" : ""}`}                >
                OrderOnline
                </NavLink>
                </li>
                <li>                
                <NavLink
                to="/NotCooded1"
className={({ isActive }) => `dekor ${isActive ? "active" : ""}`}                >
                LogIn
                </NavLink>
                </li>
            </ul>
        </nav>
    );    
}
export default Nav;