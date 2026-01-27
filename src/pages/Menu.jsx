import { Outlet, Link } from "react-router-dom";
function Menu(){
    return(
    <div>

      <h1 id="menu-h1">Welcome to Our Menu</h1>
      <p id="menu-p">Select a meal to see its dishes</p>
      <nav className="menu-navbar">
        <ul>
          <li><Link to="breakfast" className="menu-link">Breakfast</Link></li>
          <li><Link to="lunch" className="menu-link">Lunch</Link></li>
          <li><Link to="dinner" className="menu-link">Dinner</Link></li>
          <li><Link to="dessert" className="menu-link">Dessert</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
    );
}
export default Menu;