import Subtitle from "../Subtitle";
import ImageCard from "../ImageCard";

function Archive({ data }) {
  const { title, game, date, intro, mainImage, content } = data;

  return (
    <article className="archive">
      <Subtitle text={title} level={2} />

      <div className="archive-meta">
        <p className="archive-date">{date}</p>
        <p className="archive-game">{game}</p>
      </div>

      <p className="archive-intro">
        <strong>{intro}</strong>
      </p>

      <ImageCard urlImage={mainImage.src} alt={mainImage.alt} />

      <div className="archive-content">
        {content.map((item, index) => {
          if (item.type === "paragraph") {
            return <p key={index}>{item.text}</p>;
          }

          if (item.type === "image") {
            return (
              <div key={index} className="archive-image-card">
                <ImageCard urlImage={item.src} />
              </div>
            );
          }

          return null;
        })}
      </div>
    </article>
  );
}

export default Archive;
