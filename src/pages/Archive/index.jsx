import { useParams, Navigate } from "react-router-dom";
import imageBanner from "../../assets/banners/stock.webp";
import Banner from "../../components/Banner";
import archives from "../../datas/archives.json";
import games from "../../datas/games.json";
import ImageCard from "../../components/ImageCard";
import CustomButton from "../../components/CustomButton";

function Archive() {
  const { archId } = useParams();

  const currentArch = archives.find((archive) => archive.id === archId);

  if (!currentArch) {
    return <Navigate to="/error" replace />;
  }

  const episodes = archives.filter(
    (archive) => archive.gameId === currentArch.gameId,
  );
  const episodePrev = episodes.find(
    (episode) => episode.episodeNumber === currentArch.episodeNumber - 1,
  );
  const episodeNext = episodes.find(
    (episode) => episode.episodeNumber === currentArch.episodeNumber + 1,
  );

  return (
    <div id="archive-main">
      <Banner urlImage={imageBanner}>Les archives</Banner>
      <div className="episode-buttons">
        {episodePrev && (
          <CustomButton to={`/archive/${episodePrev.id}`}>
            &lt; Episode précédent
          </CustomButton>
        )}
        {episodeNext && (
          <CustomButton to={`/archive/${episodeNext.id}`}>
            Episode suivant &gt;
          </CustomButton>
        )}
      </div>
      <div className="archive-id">
        <div className="archive-ref">{`Archive ${currentArch.id}`}</div>
      </div>
      <div className="archive-secondary">
        <div className="archive-meta">
          <h2>{currentArch.title}</h2>
          <p>
            {new Date(currentArch.publicationDate).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p>{games.find((game) => currentArch.gameId === game.id).title}</p>
        </div>

        <p className="archive-intro">{currentArch.intro}</p>
        <div className="archive-image">
          <ImageCard
            urlImage={currentArch.mainImage.src}
            alt={currentArch.mainImage.alt}
          />
        </div>

        <div className="archive-content">
          {currentArch.content.map((item, index) => {
            if (item.type === "paragraph") {
              return <p key={index}>{item.text}</p>;
            }

            if (item.type === "image") {
              return (
                <div key={index} className="archive-image">
                  <ImageCard
                    urlImage={item.src}
                    alt={item.alt}
                    caption={item.caption}
                  />
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
      <CustomButton to="/Archives/">Retour aux archives</CustomButton>
    </div>
  );
}

export default Archive;
