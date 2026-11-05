import archives from "../../datas/archives.json";
import games from "../../datas/games.json";
import imageBanner from "../../assets/banners/stock.webp";
import GameCard from "../../components/GameCard";
import CustomButton from "../../components/CustomButton";
import Banner from "../../components/Banner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EpisodeModal from "../../components/EpisodeModal";

function Archives() {
  const [visibleGames, setVisibleGames] = useState(7);
  const [selectedGameId, setSelectedGameId] = useState(null);
  const navigate = useNavigate();

  // Filtrage des jeux ayant au moins un épisode
  const gamesUsed = archives
    .map((archive) => archive.gameId)
    .filter((gameId, index, tab) => tab.indexOf(gameId) === index);

  const filteredGames = games.filter((game) => gamesUsed.includes(game.id));

  const selectGame = (gameId) => {
    const gameEpisodes = archives.filter(
      (archive) => archive.gameId === gameId,
    );

    console.log("Jeu sélectionné :", gameId);
    console.log("Épisodes trouvés :", gameEpisodes);

    if (gameEpisodes.length === 1) {
      navigate(`/archive/${gameEpisodes[0].id}`);
    } else if (gameEpisodes.length > 1) {
      setSelectedGameId(gameId);
    }
  };

  const episodes = archives.filter(
    (archive) => archive.gameId === selectedGameId,
  );
  const selectedGame = games.find((game) => game.id === selectedGameId);

  return (
    <div className="archives-main">
      <Banner urlImage={imageBanner}>Les archives</Banner>
      <ul className="archives-cards">
        {filteredGames.slice(0, visibleGames).map(({ id, cover }) => (
          <GameCard
            key={id}
            id={id}
            cover={cover}
            onClick={() => {
              selectGame(id);
            }}
          />
        ))}
      </ul>
      {selectedGame && episodes.length > 1 && (
        <EpisodeModal
          game={selectedGame}
          episodes={episodes}
          onClose={() => setSelectedGameId(null)}
        />
      )}
      {filteredGames.length > visibleGames && (
        <CustomButton onClick={() => setVisibleGames((prev) => prev + 7)}>
          Afficher plus
        </CustomButton>
      )}
    </div>
  );
}

export default Archives;
