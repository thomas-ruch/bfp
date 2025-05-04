import { Link } from "react-router-dom";

function CustomButton({ children, onClick, to }) {
  if (to) {
    return (
      <Link to={to} className="custom-button">
        {children}
      </Link>
    );
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick(e);
      }}
      className="custom-button centered"
    >
      {children}
    </div>
  );
}

export default CustomButton;
