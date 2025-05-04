import { Link } from "react-router-dom";

function ArchiveCard({ id, cover }) {
  return (
    <li className="archive-card">
      <Link to={`/archive/${id}`}>
        <img src={cover} alt={`${id} cover`} />
      </Link>
    </li>
  );
}

export default ArchiveCard;
