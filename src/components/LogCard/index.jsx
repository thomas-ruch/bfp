import { Link } from "react-router-dom";

function LogCard({ id, title, date, urlImage, alt }) {
  return (
    <li className="lcard">
      <Link to={`/log/${id}`}>
        <span className="lcard-title">{title}</span>
        <span className="lcard-date">{date}</span>
        <img src={urlImage} alt={alt} />
      </Link>
    </li>
  );
}

export default LogCard;
