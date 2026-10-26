import { Link } from "react-router-dom";

function CustomButton({ children, onClick, to }) {
  if (to) {
    return (
      <Link to={to} className="custom-button">
        <span className="custom-button-text">{children}</span>
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="custom-button centered"
    >
      <span className="custom-button-text">{children}</span>
    </button>
  );
}

export default CustomButton;
