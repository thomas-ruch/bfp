import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function EpisodeModal({ game, episodes, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog.open) {
      dialog.showModal();
    }
  }, []);

  return (
    <dialog
      className="dialog-episode"
      ref={dialogRef}
      closedby="any"
      onClose={onClose}
    >
      <h2>{game.title}</h2>
      <span>Cette archive contient {episodes.length} épisodes.</span>

      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <Link to={`/archive/${episode.id}`}>
              {`${episode.episodeNumber}. ${episode.title}`}
            </Link>
          </li>
        ))}
      </ul>
    </dialog>
  );
}

export default EpisodeModal;