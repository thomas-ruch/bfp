import { Link } from "react-router-dom";
import Tag from "../Tag";

function LogCard({ id, title, date, urlImage, alt, tags }) {
  return (
    <li className="lcard">
      <Link to={`/log/${id}`}>
        <img src={urlImage} alt={alt} />
        <span className="lcard-title">{title}</span>
        <span className="lcard-date">
          {new Date(date).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric"
            })
          }
        </span>
        <span className="lcard-tags">
          {tags.map((tag) => (
            <Tag>{tag}</Tag>))}
        </span>
      </Link>
    </li>
  );
}

export default LogCard;
