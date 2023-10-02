import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className="main">
    <ul>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "linkActive" : "linkInActive"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/misdemeanours"
          className={({ isActive }) =>
            isActive ? "linkActive" : "linkInActive"
          }
        >
          Misdemeanours
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/confessions"
          className={({ isActive }) =>
            isActive ? "linkActive" : "linkInActive"
          }
        >
          Confess to Us
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
