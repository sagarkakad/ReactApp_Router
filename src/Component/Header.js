import { NavLink } from 'react-router-dom';
import './Header.css'; // import the CSS file

export default function Header() {
  return (
    <nav className="header-nav header">
      <div className="logo">TudeDude Router</div>
      <div className="nav-links">
        <NavLink 
          to="/" 
          end 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          About
        </NavLink>
        <NavLink 
          to="/userinfo" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          User Info
        </NavLink>
      </div>
    </nav>
  );
}
