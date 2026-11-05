function GameCard({ id, cover, onClick }) {
  return (
    <li>
      <button className="game-card" type="button" onClick={onClick}>
        <img src={cover} alt={`${id} cover`} />
      </button>
    </li>
  );
}

export default GameCard;
