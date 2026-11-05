import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo_BFP.webp";

function Header() {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          aria-labelledby="Accueil"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <span className="nav-icon" aria-hidden="true">
            <i className="fa-solid fa-house"></i>
          </span>
          <span className="nav-text">Accueil</span>
        </NavLink>
        <NavLink
          to="/manifesto"
          aria-label="Manifeste"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <span className="nav-icon">
            <i className="fa-solid fa-scroll" aria-hidden="true"></i>
          </span>
          <span className="nav-text">Manifeste</span>
        </NavLink>
        <NavLink to="/">
          <img src={logo} alt="BFP - Retour à l'accueil" />
        </NavLink>
        <NavLink
          to="/logBook"
          aria-label="Chroniques"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <span className="nav-icon" aria-hidden="true">
            <i className="fa-solid fa-book-open"></i>
          </span>
          <span className="nav-text">Chroniques</span>
        </NavLink>
        <NavLink
          to="/archives"
          aria-label="Archives"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <span className="nav-icon" aria-hidden="true">
            <i className="fa-solid fa-box-archive"></i>
          </span>
          <span className="nav-text">Archives</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
