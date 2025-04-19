import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo_BFP.webp";

function Header() {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/manifesto"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Manifeste
        </NavLink>
        <NavLink to="/">
          <img src={logo} alt="logo BFP" />
        </NavLink>
        <NavLink
          to="/logBook"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Chroniques
        </NavLink>
        <NavLink
          to="/archives"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Archives
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
