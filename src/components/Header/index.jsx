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
          <span className="nav-icon">
            <i className="fa-solid fa-house"></i>
          </span>
          <span className="nav-text">Accueil</span>
        </NavLink>
        <NavLink
          to="/manifesto"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <span className="nav-icon">
            <i className="fa-solid fa-scroll"></i>
          </span>
          <span className="nav-text">Manifeste</span>
        </NavLink>
        <NavLink to="/">
          <img src={logo} alt="logo BFP" />
        </NavLink>
        <NavLink
          to="/logBook"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <span className="nav-icon">
            <i className="fa-solid fa-book-open"></i>
          </span>
          <span className="nav-text">Chroniques</span>
        </NavLink>
        <NavLink
          to="/archives"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <span className="nav-icon">
            <i className="fa-solid fa-box-archive"></i>
          </span>
          <span className="nav-text">Archives</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
