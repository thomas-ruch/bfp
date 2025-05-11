import { Link } from "react-router-dom";

function LogCard({ id, title, date, urlImage, alt }) {
  return (
    <li className="lcard">
      <Link to={`/log/${id}`}>
        <img src={urlImage} alt={alt} />
        <span className="lcard-title">{title}</span>
        <span className="lcard-date">{date}</span>
      </Link>
    </li>
  );
}

export default LogCard;
