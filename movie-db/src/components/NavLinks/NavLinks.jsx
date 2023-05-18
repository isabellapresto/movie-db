import { NavLink } from "react-router-dom";
import "./NavLinks.css";

function NavLinks() {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" activeclassname="active">Movies</NavLink>
      </li>
      <li>
        <NavLink to="/about" activeclassname="active">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeclassname="active">Contact</NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;

